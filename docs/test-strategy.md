# Test Strategy — QA Technical Playbook

> Status: work in progress. This document describes the tests that exist in the repository today; it is not a coverage guarantee.

## Target and scope

The suite exercises the public SauceDemo training storefront with its demo accounts. It covers login outcomes, catalogue rendering, and a cart flow. It does not test a production commerce system, submit a real order, or validate a payment integration.

## Example test design

**Question:** If the user removes the Backpack from a cart containing the Backpack and the Bike Light, does the Bike Light remain?

**Setup:** Sign in with the public `standard_user / secret_sauce` demo credentials and add both products.

**Expected evidence:**
- The cart badge shows two items before opening the cart.
- Both product names are visible in the cart.
- After removing the Backpack, exactly one cart item remains.
- The Backpack is absent and the Bike Light remains visible.
- The badge shows one item.

A click-success signal alone does not prove the remaining state is correct, so the test asserts both the removed item and the item that should remain.

## Test selection

- **Smoke:** valid login and initial inventory render.
- **Negative:** invalid password and locked-out account.
- **Regression:** add/remove cart items and verify state after mutation.

## Triage when a test fails

1. Check the trace and screenshot before changing a selector.
2. Confirm whether the public demo site is available and its markup has not changed.
3. Re-run the single failing test to distinguish a one-off network issue from repeatable behaviour.
4. Record the exact observed result, expected result, browser, and run context.
5. Update this strategy when the suite or target changes.

## Limits

This suite is intentionally small. A pass only means these checks passed in that run. It does not prove accessibility, security, performance, or full workflow coverage.
