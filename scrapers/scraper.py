from playwright.sync_api import sync_playwright

def scrape_mdcomputers(url: str):
    """
    Basic Playwright boilerplate to verify functionality.
    Launches a headless Chromium browser, navigates to the URL, and prints the title.
    """
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        print(f"Navigating to {url}...")
        page.goto(url)
        title = page.title()
        print(f"Page Title: {title}")
        browser.close()
