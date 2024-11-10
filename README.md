
# Playwright Test Automation Framework

A scalable test automation framework built with Playwright, designed for cross-browser testing and end-to-end testing of modern web applications.


## Key Features

- **Cross-browser testing**: Run tests on Chromium, Firefox, and WebKit.
- **Fast execution**: Parallel test execution for faster feedback.
- **Headless & Headed modes**: Supports both modes for different testing scenarios
- **Page Object Model**: Organized and maintainable test structure.
- **CI/CD Integration**: Easily integrates with CI pipelines.
- **Screenshots & Videos**: Capture screenshots and videos of failed tests for debugging.


## Installation

##### 1. Clone the repo:

```bash
  git clone https://github.com/your-username/playwright.git
  cd playwright
```
##### 2. Install dependencies:
```bash
  npm install
```

##### 3. Install Playwright browsers:   
```bash
  npx playwright install
```  
##### 4. Run a test to verify
```bash
  npx playwright test
``` 

## Folder Structure
```bash
  /playwright-framework
├── /tests                  # Test cases
├── /pages                  # Page objects
├── /utils                  # Helpers
├── /config                 # Configuration files
├── /reports                # Test reports
└── package.json            # Dependencies & scripts

```
## Running tests
* Run all tests:
```bash
  npx playwright test
``` 
* Run specific test:
```bash
 npx playwright test tests/example.spec.ts
``` 
* Run tests in headed mode:
```bash
 HEADLESS=false npx playwright test
``` 
* Run tests on a specific browser:
```bash
 npx playwright test --project=firefox
``` 
## Reporting
After running tests, view the HTML report in the /reports folder. To generate the report:
```bash
 npx playwright show-report
``` 
## Contributing
 1. Fork the repo.
 2. Create a new branch for your feature.
 3. Implement your changes and write tests.
 4. Open a pull request.
