# QA Technical Portfolio — Playwright + TypeScript

[![CI](https://github.com/OperaAxe/qa-technical-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/OperaAxe/qa-technical-portfolio/actions/workflows/playwright.yml)

A TypeScript Playwright suite for login, catalogue, and cart behaviour on the public [SauceDemo training storefront](https://www.saucedemo.com/). This is the TypeScript version of the browser-testing work; it is kept separate from the Python suite.

## What is tested

- A valid login reaches the Products page.
- Incorrect credentials and a locked-out demo user are rejected.
- The inventory page renders its expected products.
- Adding products updates the cart badge and cart contents.
- Removing one product does not remove the other.

The test cases are split between page objects and specs so that the browser interactions are reusable and the assertions remain visible in the tests.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npx playwright install chromium
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

For a compatible staging copy, set `BASE_URL` to the authorized target before running the tests. Do not run the suite against a production system without permission.

## Project layout

```text
pages/
  LoginPage.ts
  InventoryPage.ts
tests/
  login.spec.ts
  cart.spec.ts
playwright.config.ts
package.json
.github/workflows/playwright.yml
```

## Development status

The suite is a work in progress. Current coverage is limited to the scenarios above, and the target is a public demo application that can change or become unavailable. A failed run needs triage before it is labelled a product defect.
