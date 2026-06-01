import { expect, test } from '@playwright/test';
import { SignupPage } from '../../../pages/signupPage';

test('homepage loads with key navigation and featured products', async ({ page }) => {
  const signupPage = new SignupPage(page);

  await signupPage.gotoHome();
  await expect(page.getByRole('link', { name: /Signup \/ Login/i })).toBeVisible();
  await expect(page.locator('a[href="/products"]')).toBeVisible();
  await expect(page.locator('.features_items')).toBeVisible();
});
