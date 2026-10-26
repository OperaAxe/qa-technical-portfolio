# QA Technical Portfolio

> **Playbook status: in progress.** I'm using this repository to show how I turn a real user journey into a test with clear evidence. I'm still adding examples, so this is a working playbook—not a claim of complete coverage.

This repo currently targets [SauceDemo](https://www.saucedemo.com/), a public training storefront. The test accounts are public demo accounts. This is not a client system, and the suite does not place orders or handle real payments.

## Start with a real flow

One simple journey tells us more than a list of tools:

1. Sign in as the public `standard_user`.
2. Confirm that the Products page and its six demo items load.
3. Add the Backpack and Bike Light to the cart.
4. Open the cart and verify both selected products are present.
5. Remove the Backpack and confirm that the Bike Light stays in the cart.

The last step checks for a side effect, not just a button click. Removing one product should not quietly remove a different one.

## Current coverage

| Area | Example | What the test proves |
|---|---|---|
| Authentication | Valid credentials | The browser reaches the inventory page |
| Authentication | Incorrect password | Login is rejected with a visible message |
| Authentication | Locked-out demo user | A locked account cannot reach inventory |
| Inventory | Load catalogue | Expected demo products are rendered |
| Cart | Add two products | The badge and cart contents reflect both items |
| Cart | Remove one product | Only the chosen item is removed |

## Run locally

Install Node.js 20 or newer.

```bash
npm install
npx playwright install chromium
npm test
```

Run with the browser visible:

```bash
npm run test:headed
```

Set `BASE_URL` to point at a compatible staging instance if you have permission to test it. Do not point this suite at a production system without authorization.

## Project layout

```text
.
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/
│   ├── login.spec.ts
│   └── cart.spec.ts
├── playwright.config.ts
├── package.json
└── .github/workflows/playwright.yml
```

## How I'm approaching QA

I start with the user's goal and the risks in that journey. Then I choose assertions that prove the result, prefer locators tied to user-facing semantics or stable test IDs, and keep the test failure useful enough to investigate. Automation helps repeat the check; it doesn't replace exploratory testing or explain a failure on its own.

## Still in progress

- Add more input-boundary and error-recovery checks.
- Add a few responsive and keyboard-navigation scenarios.
- Improve failure triage notes and attach traces to CI runs.
- Keep the README in sync with the code as coverage changes.

The public demo site can change or become unavailable, so a failed run needs triage before it is labelled a product defect. I'll update this playbook as more cases are implemented and checked.

## Contact

- GitHub: [OperaAxe](https://github.com/OperaAxe)
- LinkedIn: [davidchristianj](https://linkedin.com/in/davidchristianj)
- Upwork: [Christian David](https://upwork.com/freelancers/~010e703beaa0687103)
