/**
 * Test configuration and environment helpers
 */
export class TestConfig {
  static readonly BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  static readonly HEADLESS = process.env.HEADLESS !== 'false';
  static readonly SLOW_MO = parseInt(process.env.SLOW_MO || '0', 10);
  static readonly TIMEOUT = parseInt(process.env.TIMEOUT || '30000', 10);
  static readonly BROWSER = process.env.BROWSER || 'chromium';
  static readonly ENVIRONMENT = process.env.ENV || 'development';

  /**
   * Get API endpoint
   */
  static getApiEndpoint(path: string): string {
    return `${this.BASE_URL}/api${path}`;
  }

  /**
   * Get page URL
   */
  static getPageUrl(path: string): string {
    return `${this.BASE_URL}${path}`;
  }

  /**
   * Check if running in CI/CD environment
   */
  static isCI(): boolean {
    return !!(process.env.CI || process.env.GITHUB_ACTIONS);
  }

  /**
   * Check if in development environment
   */
  static isDevelopment(): boolean {
    return this.ENVIRONMENT === 'development';
  }

  /**
   * Check if in staging environment
   */
  static isStaging(): boolean {
    return this.ENVIRONMENT === 'staging';
  }

  /**
   * Check if in production environment
   */
  static isProduction(): boolean {
    return this.ENVIRONMENT === 'production';
  }
}

/**
 * Retry configuration for tests
 */
export class RetryConfig {
  static readonly DEFAULT_RETRIES = 2;
  static readonly MAX_RETRIES = 3;
  static readonly RETRY_DELAY = 1000; // ms

  /**
   * Retry function with exponential backoff
   */
  static async retryWithBackoff<T>(
    fn: () => Promise<T>,
    retries: number = this.DEFAULT_RETRIES,
    delay: number = this.RETRY_DELAY
  ): Promise<T> {
    let lastError: Error | null = null;

    for (let i = 0; i <= retries; i++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;
        if (i < retries) {
          const waitTime = delay * Math.pow(2, i); // Exponential backoff
          await new Promise(resolve => setTimeout(resolve, waitTime));
        }
      }
    }

    throw lastError;
  }
}

/**
 * Test data constants
 */
export class TestDataConstants {
  static readonly VALID_EMAIL = 'test@example.com';
  static readonly INVALID_EMAIL = 'invalid-email';
  static readonly VALID_PASSWORD = 'Password@123';
  static readonly WEAK_PASSWORD = '123';
  static readonly LONG_TEXT = 'a'.repeat(255);
  static readonly SPECIAL_CHARACTERS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  static readonly WAIT_TIME = 5000; // ms
}
