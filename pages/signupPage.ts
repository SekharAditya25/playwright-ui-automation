import { expect, Locator, Page } from '@playwright/test';
import type { SignupData } from '../data/signupData';

export class SignupPage {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly homeHeading: Locator;
  readonly newUserSignupHeading: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly accountInformationHeading: Locator;
  readonly titleMrRadio: Locator;
  readonly titleMrsRadio: Locator;
  readonly passwordInput: Locator;
  readonly daySelect: Locator;
  readonly monthSelect: Locator;
  readonly yearSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly optInCheckbox: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedHeading: Locator;
  readonly continueButton: Locator;
  readonly loggedInAsText: Locator;
  readonly deleteAccountLink: Locator;
  readonly accountDeletedHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: /Signup \/ Login/i });
    this.homeHeading = page.locator('h1').first();
    this.newUserSignupHeading = page.locator('div.signup-form h2', { hasText: 'New User Signup!' });
    this.signupNameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.accountInformationHeading = page.locator('h2', { hasText: 'Enter Account Information' });
    this.titleMrRadio = page.locator('#id_gender1');
    this.titleMrsRadio = page.locator('#id_gender2');
    this.passwordInput = page.locator('#password');
    this.daySelect = page.locator('#days');
    this.monthSelect = page.locator('#months');
    this.yearSelect = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.optInCheckbox = page.locator('#optin');
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.companyInput = page.locator('#company');
    this.address1Input = page.locator('#address1');
    this.address2Input = page.locator('#address2');
    this.countrySelect = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.locator('#mobile_number');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedHeading = page.locator('h2', { hasText: 'Account Created!' });
    this.continueButton = page.getByRole('link', { name: /Continue/i }).first();
    this.loggedInAsText = page.getByText(/Logged in as/i);
    this.deleteAccountLink = page.getByRole('link', { name: /Delete Account/i });
    this.accountDeletedHeading = page.locator('h2', { hasText: 'Account Deleted!' });
  }

  async gotoHome() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded', timeout: 90000 });
    await expect(this.page).toHaveTitle(/Automation Exercise/);
    await expect(this.homeHeading).toBeVisible({ timeout: 30000 });
  }

  async navigateToSignupLogin() {
    await this.signupLoginLink.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.newUserSignupHeading).toBeVisible({ timeout: 30000 });
  }

  async verifyNewUserSignupVisible() {
    await expect(this.newUserSignupHeading).toBeVisible({ timeout: 30000 });
  }

  async submitSignupDetails(name: string, email: string) {
    await expect(this.signupNameInput).toBeVisible({ timeout: 30000 });
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyEnterAccountInformationVisible() {
    await expect(this.accountInformationHeading).toBeVisible({ timeout: 30000 });
  }

  async fillAccountInformation(data: SignupData) {
    if (data.title === 'Mr.') {
      await this.titleMrRadio.check();
    } else {
      await this.titleMrsRadio.check();
    }
    await this.passwordInput.fill(data.password);
    await this.daySelect.selectOption(data.day);
    await this.monthSelect.selectOption(data.month);
    await this.yearSelect.selectOption(data.year);

    if (data.newsletter) await this.newsletterCheckbox.check();
    if (data.optIn) await this.optInCheckbox.check();

    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.companyInput.fill(data.company);
    await this.address1Input.fill(data.address1);
    await this.address2Input.fill(data.address2);
    await this.countrySelect.selectOption(data.country);
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.zipcodeInput.fill(data.zipcode);
    await this.mobileNumberInput.fill(data.mobileNumber);
  }

  async submitAccountCreation() {
    await this.createAccountButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.accountCreatedHeading).toBeVisible({ timeout: 30000 });
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedHeading).toBeVisible({ timeout: 30000 });
  }

  async clickContinue() {
    await this.continueButton.click();
    await expect(this.homeHeading).toBeVisible();
  }

  async verifyLoggedInAs() {
    await expect(this.loggedInAsText).toBeVisible({ timeout: 30000 });
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }
}
