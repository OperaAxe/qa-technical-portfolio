import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly title: Locator;
  readonly items: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.items = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.title).toHaveText("Products");
    await expect(this.items).toHaveCount(6);
  }

  async addBackpack(): Promise<void> {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async addBikeLight(): Promise<void> {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
