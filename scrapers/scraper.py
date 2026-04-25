from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

def scrape_mdcomputers(url: str):
    """
    Hardened scraper for MDComputers.
    Handles user-agent mocking, out-of-stock states, and price parsing.
    """
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Use a modern Google Chrome User-Agent to bypass basic bot protections
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )

        page = context.new_page()
        print(f"Navigating to {url}...")

        try:
            page.goto(url, wait_until="domcontentloaded")

            # Stock Checking
            if page.locator('.out-of-stock').count() > 0:
                print("Item is out of stock.")
                browser.close()
                return {'price': None, 'is_in_stock': False}

            # Price Extraction
            try:
                price_element = page.wait_for_selector('.amount', timeout=10000)
                if not price_element:
                    print("Price element not found.")
                    browser.close()
                    return None

                price_text = price_element.inner_text()

                # Data Cleaning: remove '₹' and ','
                clean_price = int(price_text.replace('₹', '').replace(',', '').strip())
                print(f"Found price: {clean_price}")

                browser.close()
                return {'price': clean_price, 'is_in_stock': True}

            except PlaywrightTimeoutError:
                print("Price not found (Timeout).")
                browser.close()
                return None

        except Exception as e:
            print(f"Error scraping {url}: {e}")
            browser.close()
            return None
