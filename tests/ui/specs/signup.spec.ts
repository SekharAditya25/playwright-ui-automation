import { test } from '@playwright/test';
import { SignupPage } from '../pages/signupPage';
import { createSignupData } from '../../../data/signupData';

test('Register User', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const userData = createSignupData();

  await signupPage.gotoHome();
  await signupPage.navigateToSignupLogin();
  await signupPage.verifyNewUserSignupVisible();
  await signupPage.submitSignupDetails(userData.name, userData.email);
  await signupPage.verifyEnterAccountInformationVisible();
  await signupPage.fillAccountInformation(userData);
  await signupPage.submitAccountCreation();
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();
  await signupPage.verifyLoggedInAs();
  await signupPage.deleteAccount();
  await signupPage.verifyAccountDeleted();
  await signupPage.clickContinue();
});
