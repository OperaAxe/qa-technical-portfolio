import { expect, test } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

test("cart contains selected products and removes only the chosen item", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.signIn("standard_user", "secret_sauce");
  await inventory.expectLoaded();

  await inventory.addBackpack();
  await inventory.addBikeLight();
  await expect(inventory.cartBadge).toHaveText("2");

  await inventory.openCart();
  await expect(page.locator(".cart_item")).toHaveCount(2);
  await expect(page.getByText("Sauce Labs Backpack", { exact: true })).toBeVisible();
  await expect(page.getByText("Sauce Labs Bike Light", { exact: true })).toBeVisible();

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator(".cart_item")).toHaveCount(1);
  await expect(page.getByText("Sauce Labs Backpack", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Sauce Labs Bike Light", { exact: true })).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("1");
});
