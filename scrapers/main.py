import db
from scraper import scrape_mdcomputers

if __name__ == "__main__":
    print("Testing DB Initialization...")
    if db.supabase:
        print("DB Initialized")

    print("\nTesting Scraper...")
    scrape_mdcomputers("https://mdcomputers.in/")
