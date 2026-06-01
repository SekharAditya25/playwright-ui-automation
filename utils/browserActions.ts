import { Page, Locator } from '@playwright/test';

/**
 * Common actions/helper methods for page interactions
 */
export class BrowserActions {
  /**
   * Fill input field (with clear first)
   */
  static async fillInput(locator: Locator, value: string): Promise<void> {
    await locator.clear();
    await locator.fill(value);
  }

  /**
   * Click element with verification
   */
  static async clickElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout: 30000 });
    await locator.click();
  }

  /**
   * Double click element
   */
  static async doubleClickElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout: 30000 });
    await locator.dblclick();
  }

  /**
   * Right click element
   */
  static async rightClickElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout: 30000 });
    await locator.click({ button: 'right' });
  }

  /**
   * Hover over element
   */
  static async hoverElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout: 30000 });
    await locator.hover();
  }

  /**
   * Select dropdown option by value
   */
  static async selectDropdownOption(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  /**
   * Get element text
   */
  static async getElementText(locator: Locator): Promise<string> {
    await locator.waitFor({ state: 'visible', timeout: 30000 });
    return (await locator.textContent()) || '';
  }

  /**
   * Get input value
   */
  static async getInputValue(locator: Locator): Promise<string> {
    return (await locator.inputValue()) || '';
  }

  /**
   * Check checkbox
   */
  static async checkCheckbox(locator: Locator): Promise<void> {
    await locator.check();
  }

  /**
   * Uncheck checkbox
   */
  static async uncheckCheckbox(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  /**
   * Switch to iframe
   */
  static async switchToIframe(page: Page, frameLocator: Locator): Promise<any> {
    return frameLocator.frameLocator(':scope');
  }

  /**
   * Take screenshot
   */
  static async takeScreenshot(page: Page, fileName: string): Promise<void> {
    await page.screenshot({ path: `./screenshots/${fileName}.png`, fullPage: true });
  }

  /**
   * Get attribute value
   */
  static async getAttributeValue(locator: Locator, attribute: string): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  /**
   * Scroll element into view
   */
  static async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  /**
   * Press keyboard key
   */
  static async pressKey(locator: Locator, key: string): Promise<void> {
    await locator.press(key);
  }

  /**
   * Type text (character by character, slower)
   */
  static async typeText(locator: Locator, text: string): Promise<void> {
    await locator.type(text);
  }
}
