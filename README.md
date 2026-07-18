# Playwright UI Automation

A Playwright UI automation repository with reusable page objects, shared test data, cross-browser execution, and HTML reporting.

## What is included today

- Playwright configuration in `playwright.config.ts`
- Cross-browser projects for `chromium`, `firefox`, and `webkit`
- UI tests under `tests/ui/specs/`
- Reusable page object in `pages/signupPage.ts`
- Test data generation in `data/signupData.ts`
- Utility helpers in `utils/`
- GitHub Actions workflows in `.github/workflows/`
- HTML reports under `playwright-report/`
- Artifacts and debugging output under `test-results/`

## Scripts

```bash
npm install
npx playwright install
npm test
npm run test:signup
```

### Available npm scripts

- `npm test` — runs `npx playwright test`
- `npm run test:signup` — runs `npx playwright test tests/ui/specs/signup.spec.ts`

## Test coverage today

- `tests/ui/specs/signup.spec.ts` — end-to-end signup flow on Automation Exercise
- `tests/ui/specs/homepage.spec.ts` — homepage smoke and navigation checks
- `tests/ui/specs/example.spec.ts` — example Playwright verification against playwright.dev

## Key implementation details

### Playwright configuration

- `playwright.config.ts` uses:
  - `baseURL: 'https://automationexercise.com'`
  - `timeout: 60000`
  - `fullyParallel: true`
  - `retries` on CI only
  - `reporter: 'html'`
  - `trace: 'on-first-retry'`
  - projects for `chromium`, `firefox`, and `webkit`

### Page object model

- `pages/signupPage.ts` encapsulates the signup journey, including:
  - page navigation
  - signup/login navigation
  - form submission
  - account detail entry
  - account creation verification
  - continue flow validation
  - logged-in state assertion
  - account deletion

### Test data

- `data/signupData.ts` generates unique emails per run and provides default signup data.
- This supports repeated execution without email collisions.

### Utilities

- `utils/index.ts` exports helpers:
  - `WaitHelpers`
  - `CommonAssertions`
  - `BrowserActions`
  - `TestConfig`, `RetryConfig`, `TestDataConstants`

- `utils/testConfig.ts` includes environment helpers for `BASE_URL`, `HEADLESS`, `SLOW_MO`, and `TIMEOUT`.

## Folder structure

- `pages/` — page object classes
- `tests/ui/specs/` — UI test specifications
- `data/` — shared and generated test data
- `utils/` — reusable helper modules
- `playwright-report/` — generated HTML reports
- `test-results/` — saved artifacts and debugging output
- `.github/workflows/` — CI workflows
- `docs/` — project documentation
- `config/` — configuration assets for future use
- `fixtures/` — fixture support for future Playwright extensions

## Running tests locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Install Playwright browsers
   ```bash
   npx playwright install
   ```
3. Run all tests
   ```bash
   npm test
   ```
4. Run the signup spec only
   ```bash
   npm run test:signup
   ```
5. Open the HTML report
   ```bash
   npx playwright show-report playwright-report
   ```

## Notes

- The repository currently targets the live Automation Exercise site via Playwright's `baseURL`.
- `tests/ui/specs/example.spec.ts` is a baseline example and uses `playwright.dev`.
- `.github/workflows/` contains `playwright.yml` and `codeql.yml`.
- The project is structured for easy expansion into additional flows, environments, and CI validation.
