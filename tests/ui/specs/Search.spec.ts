import { test, expect } from '@playwright/test';

test('Google search', async ({ page }) => {
 // Navigate to Google
 await page.goto('https://www.google.com');

 // Verify the page title contains "Google"
 await expect(page).toHaveTitle(/Google/);

 // Locate the search box and type a query
 const searchBox = page.getByRole('combobox', { name: /search/i });
 await searchBox.fill('Playwright');
 await searchBox.press('Enter');

 // Verify the search results page
 await expect(page).toHaveTitle(/Playwright/i);
 });