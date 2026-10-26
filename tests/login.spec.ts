import { expect, test } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

test.describe("login", () => {
  test("standard user reaches the product inventory", async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.open();
    await login.signIn("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory\.html$/);
    await inventory.expectLoaded();
  });

  test("wrong password is rejected with a visible message", async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.signIn("standard_user", "incorrect-password");

    await login.expectError(
      "Username and password do not match any user in this service"
    );
    await expect(page).not.toHaveURL(/inventory\.html$/);
  });

  test("locked-out user cannot enter the inventory", async ({ page }) => {
    const login = new LoginPage(page);

    await login.open();
    await login.signIn("locked_out_user", "secret_sauce");

    await login.expectError("Sorry, this user has been locked out");
    await expect(page).not.toHaveURL(/inventory\.html$/);
  });
});
