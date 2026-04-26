import os
import json
import requests
from bs4 import BeautifulSoup
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SECRET_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Error: SUPABASE_URL and SUPABASE_SECRET_KEY must be set in .env")
    exit(1)

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def load_queue(filepath="queue.json"):
    if not os.path.exists(filepath):
        print(f"Error: {filepath} not found.")
        return []
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

def load_processed(filepath="processed.txt"):
    if not os.path.exists(filepath):
        return set()
    with open(filepath, "r", encoding="utf-8") as f:
        return set(line.strip() for line in f if line.strip())

def mark_processed(url, filepath="processed.txt"):
    with open(filepath, "a", encoding="utf-8") as f:
        f.write(f"{url}\n")

def extract_product_data(url):
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")

        # 1. Primary Data from script tag
        script_tag = soup.find("script", class_="data-json-product")
        if not script_tag:
            print(f"  [!] Missing data-json-product script tag for {url}")
            return None

        try:
            product_json = json.loads(script_tag.string)
        except json.JSONDecodeError:
            print(f"  [!] Invalid JSON in data-json-product for {url}")
            return None

        # Extract fields
        name = product_json.get("title", "")
        external_id = str(product_json.get("id", ""))

        variants = product_json.get("variants", [])
        price = 0
        is_in_stock = False

        if variants:
            first_variant = variants[0]
            raw_price = first_variant.get("price", 0)
            price = float(raw_price) / 100.0 if raw_price else 0.0
            is_in_stock = first_variant.get("available", False)

        # 2. Specs from description table
        specs = {}
        description_div = soup.find("div", class_="product-description") # common class, or just look for table anywhere if needed
        # Fallback to general table search if specific description div isn't found
        tables = description_div.find_all("table") if description_div else soup.find_all("table")

        for table in tables:
            rows = table.find_all("tr")
            for row in rows:
                cols = row.find_all(["th", "td"])
                if len(cols) == 2:
                    key = cols[0].get_text(strip=True)
                    val = cols[1].get_text(strip=True)
                    if key and val:
                        specs[key] = val

        return {
            "url": url,
            "name": name,
            "price": price,
            "is_in_stock": is_in_stock,
            "external_id": external_id,
            "specs": specs
        }
    except Exception as e:
        print(f"  [!] Error extracting data from {url}: {e}")
        return None

def main():
    queue = load_queue()
    if not queue:
        return

    processed_urls = load_processed()
    print(f"Loaded {len(queue)} products from queue. {len(processed_urls)} already processed.")

    for item in queue:
        url = item.get("url")
        category = item.get("category")

        if not url or not category:
            continue

        if url in processed_urls:
            print(f"Skipping already processed: {url}")
            continue

        print(f"Processing: {url}")
        data = extract_product_data(url)

        if data:
            data["category"] = category

            try:
                # Upsert to Supabase
                response = supabase.table("components").upsert(
                    data,
                    on_conflict="url"
                ).execute()

                # Mark as processed after successful upsert
                mark_processed(url)
                processed_urls.add(url)
                print(f"  [+] Upserted successfully")
            except Exception as e:
                print(f"  [!] Supabase upsert error for {url}: {e}")

if __name__ == "__main__":
    main()
