# Assignment01
# Assignment 1 - Option 1 (Singlish to Sinhala Translator Testing)

## Website Tested
https://www.swifttranslator.com/

## Tech Stack
Playwright (JavaScript)

## Test Files
- tests/pos.spec.js (24 Positive Functional Test Cases)
- tests/neg.spec.js (10 Negative Functional Test Cases)
- tests/ui.spec.js  (1 UI Test Case)

## Setup
1) Install dependencies
npm install

2) Install Playwright browsers
npx playwright install

## Run Tests
Run all tests:
npx playwright test

Run only positive tests:
npx playwright test tests/pos.spec.js

Run only negative tests:
npx playwright test tests/neg.spec.js

Run only UI test:
npx playwright test tests/ui.spec.js

## View HTML Report
npx playwright show-report
