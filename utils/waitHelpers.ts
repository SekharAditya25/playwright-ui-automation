import { Page, Locator } from '@playwright/test';

/**
 * Wait utilities for common scenarios in tests
 */
export class WaitHelpers {
  /**
   * Wait for an element to be visible and enabled
   */
  static async waitForElementToBeClickable(locator: Locator, timeout: number = 30000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.isEnabled().then(isEnabled => {
      if (!isEnabled) throw new Error('Element is not enabled');
    });
  }

  /**
   * Wait for page to load completely
   */
  static async waitForPageLoad(page: Page, timeout: number = 30000): Promise<void> {
    await page.waitForLoadState('domcontentloaded', { timeout });
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {
      // networkidle can timeout, that's ok sometimes
    });
  }

  /**
   * Wait for element and get text
   */
  static async waitForTextAndGet(locator: Locator, timeout: number = 30000): Promise<string> {
    await locator.waitFor({ state: 'visible', timeout });
    return await locator.textContent() || '';
  }

  /**
   * Wait for multiple elements to be visible
   */
  static async waitForAllElements(locators: Locator[], timeout: number = 30000): Promise<void> {
    for (const locator of locators) {
      await locator.waitFor({ state: 'visible', timeout });
    }
  }

  /**
   * Wait for element to disappear
   */
  static async waitForElementToDisappear(locator: Locator, timeout: number = 30000): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  /**
   * Wait for navigation to complete
   */
  static async waitForNavigation(page: Page, action: () => Promise<void>, timeout: number = 30000): Promise<void> {
    const navigationPromise = page.waitForNavigation({ timeout });
    await action();
    try {
      await navigationPromise;
    } catch {
      // Navigation might not happen in some cases, that's ok
    }
  }

  /**
   * Wait and capture element count
   */
  static async waitForElementsCount(locator: Locator, expectedCount: number, timeout: number = 30000): Promise<number> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      const count = await locator.count();
      if (count === expectedCount) return count;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    throw new Error(`Expected ${expectedCount} elements, but timeout occurred`);
  }
}
