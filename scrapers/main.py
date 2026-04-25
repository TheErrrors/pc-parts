import time
import random
import db
from scraper import scrape_mdcomputers

def main():
    print("Initializing Database Connection...")
    if not db.supabase:
        print("Failed to initialize database.")
        return

    print("Querying components from Supabase...")
    # Select components with a valid mdcomputers_url
    response = db.supabase.table("components").select("id, mdcomputers_url").not_("mdcomputers_url", "is", "null").execute()

    components = response.data
    if not components:
        print("No components found with 'mdcomputers_url'.")
        return

    print(f"Found {len(components)} components to scrape.")

    for component in components:
        comp_id = component['id']
        url = component['mdcomputers_url']

        print(f"\n--- Scraping Component ID: {comp_id} ---")
        result = scrape_mdcomputers(url)

        if result:
            # Insert into prices table
            price_data = {
                "component_id": comp_id,
                "price": result['price'],
                "is_in_stock": result['is_in_stock'],
                "store_name": "MDComputers",
                "source": "scraper"
            }
            try:
                db.supabase.table("prices").insert(price_data).execute()
                print(f"Successfully inserted price for component {comp_id}.")
            except Exception as e:
                print(f"Failed to insert price for {comp_id} into Supabase: {e}")
        else:
            print(f"Failed to extract price/stock data for {url}")

        # Random delay to avoid rate limiting
        sleep_time = random.uniform(2, 5)
        print(f"Sleeping for {sleep_time:.2f} seconds...")
        time.sleep(sleep_time)

if __name__ == "__main__":
    main()
