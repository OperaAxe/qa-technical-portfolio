import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('verify user can search on home page', async ({ page }) => {
  const home = new HomePage(page);
  
  await home.navigate();
  await home.search('playwright');
  
  // You would add assertions here to verify the results
});
