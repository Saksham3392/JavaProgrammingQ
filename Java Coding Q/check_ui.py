from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        page.on("pageerror", lambda err: print(f"ERROR: {err}"))
        
        print("Navigating to http://localhost:5000 ...")
        page.goto("http://localhost:5000")
        
        # Wait a bit for JS to execute
        page.wait_for_timeout(2000)
        
        page.screenshot(path="screenshot.png")
        print("Screenshot saved to screenshot.png")
        
        browser.close()

if __name__ == "__main__":
    run()
