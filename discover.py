import json
import time
import random
import os
from urllib.parse import urljoin
from playwright.sync_api import sync_playwright
from playwright_stealth import stealth_sync

def read_collections(filepath="collections.txt"):
    collections = []
    if not os.path.exists(filepath):
        print(f"Warning: {filepath} not found. Returning empty list.")
        return collections

    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("URL,"):
                continue
            parts = line.split(",", 1)
            if len(parts) == 2:
                collections.append({"url": parts[0].strip(), "category": parts[1].strip()})
    return collections

def discover_products():
    collections = read_collections()
    if not collections:
        print("No collections to process.")
        return

    all_products = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False) # Run headless=False to potentially avoid immediate detection
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        stealth_sync(page)

        for collection in collections:
            url = collection["url"]
            category = collection["category"]
            print(f"Processing collection: {url} (Category: {category})")

            try:
                page.goto(url, wait_until="networkidle", timeout=60000)
            except Exception as e:
                print(f"Error loading {url}: {e}")
                continue

            # Click load more button while it's visible
            while True:
                try:
                    # Look for the load more button
                    load_more_btn = page.locator(".usf-load-more").first

                    if load_more_btn.is_visible():
                        print("Clicking 'Load More'...")
                        load_more_btn.click()

                        # Wait for random time between 1.5s and 3.0s
                        time.sleep(random.uniform(1.5, 3.0))

                        # Wait for network idle to ensure new items are loaded, catch timeout in case of continuous tracking scripts
                        try:
                            page.wait_for_load_state("networkidle", timeout=10000)
                        except Exception:
                            # It's okay if it times out, let's just proceed to look for the button again.
                            pass
                    else:
                        print("No more 'Load More' button visible.")
                        break

                except Exception as e:
                    # Button might be obscured, not clickable, or we reached the end
                    print(f"Stopped clicking 'Load More'. Details: {e}")
                    break

            # Extract product links
            print(f"Extracting links for {category}...")

            try:
                # Wait a bit just to be safe
                time.sleep(1)
                links = page.locator(".product-collection__title h2 a").all()
                for link in links:
                    href = link.get_attribute("href")
                    if href:
                        # Convert to absolute URL if it's relative
                        absolute_url = urljoin(url, href)
                        all_products.append({
                            "url": absolute_url,
                            "category": category
                        })
            except Exception as e:
                print(f"Error extracting links: {e}")

        browser.close()

    # Save to queue.json
    print(f"Found {len(all_products)} total products.")
    with open("queue.json", "w", encoding="utf-8") as f:
        json.dump(all_products, f, indent=2)
    print("Saved to queue.json")

if __name__ == "__main__":
    discover_products()
