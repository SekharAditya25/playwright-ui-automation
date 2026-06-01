import { expect, Locator, Page } from '@playwright/test';

/**
 * Common assertion helpers for reusable verification logic
 */
export class CommonAssertions {
  /**
   * Assert element is visible
   */
  static async assertElementVisible(locator: Locator, timeout: number = 30000): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
  }

  /**
   * Assert element is not visible
   */
  static async assertElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).not.toBeVisible();
  }

  /**
   * Assert element is enabled
   */
  static async assertElementEnabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  /**
   * Assert element is disabled
   */
  static async assertElementDisabled(locator: Locator): Promise<void> {
    await expect(locator).toBeDisabled();
  }

  /**
   * Assert element has specific text
   */
  static async assertElementHasText(locator: Locator, expectedText: string): Promise<void> {
    await expect(locator).toContainText(expectedText);
  }

  /**
   * Assert element has exact text
   */
  static async assertElementHasExactText(locator: Locator, expectedText: string): Promise<void> {
    await expect(locator).toHaveText(expectedText);
  }

  /**
   * Assert element has specific attribute value
   */
  static async assertElementHasAttribute(locator: Locator, attribute: string, value: string): Promise<void> {
    await expect(locator).toHaveAttribute(attribute, value);
  }

  /**
   * Assert page has specific URL
   */
  static async assertPageUrl(page: Page, expectedUrl: string | RegExp): Promise<void> {
    await expect(page).toHaveURL(expectedUrl);
  }

  /**
   * Assert page has specific title
   */
  static async assertPageTitle(page: Page, expectedTitle: string | RegExp): Promise<void> {
    await expect(page).toHaveTitle(expectedTitle);
  }

  /**
   * Assert element count
   */
  static async assertElementCount(locator: Locator, expectedCount: number): Promise<void> {
    await expect(locator).toHaveCount(expectedCount);
  }

  /**
   * Assert element is checked (for checkboxes/radios)
   */
  static async assertElementChecked(locator: Locator): Promise<void> {
    await expect(locator).toBeChecked();
  }

  /**
   * Assert element is not checked
   */
  static async assertElementNotChecked(locator: Locator): Promise<void> {
    await expect(locator).not.toBeChecked();
  }

  /**
   * Assert element is focused
   */
  static async assertElementFocused(locator: Locator): Promise<void> {
    await expect(locator).toBeFocused();
  }

  /**
   * Assert element has CSS class
   */
  static async assertElementHasClass(locator: Locator, className: string): Promise<void> {
    await expect(locator).toHaveClass(new RegExp(className));
  }
}
