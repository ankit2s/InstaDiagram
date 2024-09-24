import argparse
import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service  # Import Service
from webdriver_manager.chrome import ChromeDriverManager

def render_mermaid(mermaid_code, output_path):
    # Create an HTML file with the Mermaid code
    mermaid_html = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <script src="https://unpkg.com/mermaid@9/dist/mermaid.min.js"></script>
    </head>
    <body>
        <div class="mermaid">
            {mermaid_code}
        </div>
        <script>
            mermaid.initialize({{ startOnLoad: true }});
        </script>
    </body>
    </html>
    '''

    # Write the HTML content to a temporary file
    temp_html_file = 'temp_mermaid.html'
    with open(temp_html_file, 'w', encoding='utf-8') as file:
        file.write(mermaid_html)

    # Set up Selenium with headless Chrome
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')  # Add this line for compatibility
    chrome_options.add_argument('--no-sandbox')   # Add this line if running as root
    chrome_options.add_argument('--disable-dev-shm-usage')  # Overcome limited resource problems

    # Initialize the WebDriver using Service
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    try:
        # Open the HTML file in the browser
        driver.get('file://' + os.path.abspath(temp_html_file))

        # Wait for the diagram to render
        time.sleep(2)  # Increase if necessary

        # Find the diagram element
        element = driver.find_element("css selector", '.mermaid')

        # Take a screenshot of the element
        element.screenshot(output_path)

    except Exception as e:
        print(f'Error during rendering: {e}')
        raise e

    finally:
        # Close the browser and clean up
        driver.quit()
        os.remove(temp_html_file)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Render Mermaid diagram to an image.')
    parser.add_argument('--code', type=str, help='Mermaid code as a string.')
    parser.add_argument('--input', type=str, help='Path to a file containing Mermaid code.')
    parser.add_argument('--output', type=str, default='diagram.png', help='Output image file path.')
    args = parser.parse_args()

    if args.code:
        mermaid_code = args.code
    elif args.input:
        with open(args.input, 'r', encoding='utf-8') as f:
            mermaid_code = f.read()
    else:
        # Read from standard input
        print('Please enter your Mermaid code (Press Ctrl+D to end input):')
        mermaid_code = sys.stdin.read()
        if not mermaid_code.strip():
            print('Error: No Mermaid code provided.')
            exit(1)

    output_path = args.output
    try:
        render_mermaid(mermaid_code, output_path)
        print(f'Diagram saved to {output_path}')
    except Exception as e:
        print(f'Error rendering diagram: {e}')
        exit(1)
