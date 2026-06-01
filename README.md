# Playwright UI Automation

A flexible Playwright automation project for UI validation, reusable test abstractions, and future expansion across additional workflows, environments, and reporting needs.

## Project purpose

This repository is designed to grow with the project. It currently provides a solid foundation for:

- Cross-browser UI automation
- Reusable page objects and test helpers
- Local execution and debugging workflows
- HTML reporting and artifact collection
- Future expansion into API tests, CI pipelines, environment configuration, and richer test analytics

## What is included today

### Core automation structure

- Playwright configuration in `playwright.config.ts`
- A browser matrix covering Chromium, Firefox, and WebKit
- UI tests under `tests/ui/specs/`
- Page objects under `tests/ui/pages/`
- Shared test data under `data/`

### Current test coverage

- Homepage validation
- End-to-end signup and account cleanup flow
- Example Playwright specs for quick verification of the local setup

### Reporting and artifacts

- HTML report output under `playwright-report/`
- Test artifacts, traces, and screenshots under `test-results/`

## Intended growth path

This repository is meant to support ongoing changes without rewriting the documentation each time. The current structure is suitable for adding:

- New test suites for additional user journeys
- API coverage alongside UI tests
- Environment-specific configuration such as `baseURL`, credentials, and feature flags
- CI/CD workflows for PR validation and scheduled runs
- Expanded reporting, such as custom reporters, summaries, or dashboards
- Test data management improvements, including fixtures and config-driven datasets

## Project structure

- `pages/` — **Root-level page objects** (POM best practice)
- `tests/ui/specs/` — UI test specs and scenario definitions
- `tests/api/specs/` — API test specs (ready for expansion)
- `data/` — Test data factories and shared data types
- `utils/` — **Reusable utility helpers** (wait, assertions, browser actions, config)
  - `waitHelpers.ts` — Common wait and polling utilities
  - `commonAssertions.ts` — Centralized assertion methods
  - `browserActions.ts` — Common browser interactions
  - `testConfig.ts` — Configuration, constants, and retry logic
  - `index.ts` — Central export point for all utilities
- `config/` — Configuration assets
- `fixtures/` — Shared Playwright fixtures
- `playwright-report/` — Generated HTML reports
- `test-results/` — Debugging artifacts from failed runs
- `.github/workflows/` — **GitHub Actions CI/CD pipelines**
  - `playwright.yml` — Automated testing workflow
  - `codeql.yml` — Security scanning workflow
- `docs/` — **Project documentation**
  - `github-actions-complete-guide.html` — Complete CI/CD guide
  - `github-actions-interview-qa.txt` — Interview Q&A reference
- `POM_STRUCTURE.md` — Detailed Page Object Model documentation

## Page Object Model (POM) Architecture

This project implements **enterprise-grade POM** with clear separation of concerns:

### Pages Folder (`pages/`)
Contains page object classes with:
- Element locators and selectors
- Page-specific actions and methods
- Proper encapsulation and reusability

Example:
```typescript
import { SignupPage } from '../pages/signupPage';

test('Register User', async ({ page }) => {
  const signupPage = new SignupPage(page);
  await signupPage.gotoHome();
  await signupPage.navigateToSignupLogin();
});
```

### Utils Folder (`utils/`)
Provides reusable helpers organized by functionality:

**WaitHelpers** — Common wait patterns
```typescript
import { WaitHelpers } from '../utils';
await WaitHelpers.waitForPageLoad(page);
await WaitHelpers.waitForElementToBeClickable(button);
```

**BrowserActions** — Common browser interactions
```typescript
import { BrowserActions } from '../utils';
await BrowserActions.fillInput(emailField, 'test@example.com');
await BrowserActions.clickElement(submitButton);
```

**CommonAssertions** — Centralized assertion methods
```typescript
import { CommonAssertions } from '../utils';
await CommonAssertions.assertElementVisible(successMessage);
await CommonAssertions.assertPageTitle(page, /Success/);
```

**TestConfig** — Environment configuration and constants
```typescript
import { TestConfig, TestDataConstants } from '../utils';
const url = TestConfig.getPageUrl('/signup');
const email = TestDataConstants.VALID_EMAIL;
```

## CI/CD & GitHub Actions

This project includes automated testing and security scanning:

### Workflows (`.github/workflows/`)
- **Playwright Tests** (`playwright.yml`)
  - Runs UI tests on every push and pull request
  - Tests across Chrome, Firefox, and Safari browsers
  - 2x automatic retries for flaky tests
  - HTML report uploaded as artifact
  - ⏱️ ~10-12 minutes

- **CodeQL Security** (`codeql.yml`)
  - Static code analysis for security vulnerabilities
  - Detects SQL injection, XSS, insecure patterns
  - Runs on push, PR, and weekly schedule
  - ⏱️ ~8-15 minutes

### Documentation (`docs/`)
- **github-actions-complete-guide.html** — Visual guide with step-by-step explanations
- **github-actions-interview-qa.txt** — 22 CI/CD interview Q&A with answers

### Running Tests Locally
```bash
# Run all tests
npm test

# Run with UI mode (interactive)
npm run test:ui

# Run specific browser
npx playwright test --project=chromium

# Run with headed mode to see browser
npx playwright test --headed
```

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

Install dependencies:

```bash
npm install
```

Install Playwright browsers if they are not already available:

```bash
npx playwright install
```

## Running the suite

### Run all tests

```bash
npm test
```

### Run the signup flow

```bash
npm run test:signup
```

### Run a targeted spec

```bash
npx playwright test tests/ui/specs/homepage.spec.ts
```

### Run a specific browser project

```bash
npx playwright test --project=chromium
```

## Current automation patterns

### Page objects

The page object model keeps selectors and workflow actions centralized. The `SignupPage` class is the main example and can be extended for future journeys.

Key responsibilities currently covered by the page object:

- Navigation to the home page
- Accessing the signup flow
- Filling registration details
- Submitting account creation
- Verifying onboarding output
- Deleting the test account

### Test data

The current test data helper creates unique emails for each run so repeated executions are less likely to collide with previously created accounts.

This pattern can be expanded to support:

- Data factories for multiple workflows
- Environment-specific input sets
- Feature toggles and locale-specific scenarios

## Reports and debugging

### HTML report

Open the generated report after a run:

```bash
npx playwright show-report playwright-report
```

### Traces and screenshots

Artifacts from failed runs are stored in `test-results/`. These are useful for debugging flaky behavior, timing issues, and UI changes.

## Environment and external dependencies

The current tests target the live Automation Exercise site. Because the configuration does not currently define a shared `baseURL`, the page object directly navigates to the site URL.

This means the project is ready for incremental improvements such as:

- Adding a configurable `baseURL`
- Supporting multiple environments via env files
- Centralizing external endpoints and credentials

## Troubleshooting

### Browser binaries are missing

```bash
npx playwright install
```

### Tests fail unexpectedly

- Re-run the target spec
- Review the HTML report in `playwright-report/`
- Inspect traces or screenshots in `test-results/`

### Duplicate account issues

The current signup data helper generates unique emails, but repeated runs against the live site can still be affected by environment changes or external test state.

## Contribution and maintenance guidance

When adding new changes, keep the README aligned with the project’s direction by documenting:

- New test scopes and workflows
- New scripts or execution commands
- New reporting or artifact behavior
- Environment assumptions and dependencies
- Changes to the test architecture or data strategy

## Future-ready checklist

The following areas are natural next steps and should be reflected in the README as they are added:

- API test coverage
- CI workflow setup
- Environment configuration
- Shared fixtures and reusable assertions
- Additional reporting and dashboards
- Release and changelog conventions

## Current status

This project currently provides a reusable Playwright foundation with homepage and signup automation, HTML reporting, and a structure that supports additional growth over time.
