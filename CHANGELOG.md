# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- **Comprehensive GitHub Actions Documentation**
  - `docs/github-actions-complete-guide.html` — Complete visual guide with detailed step-by-step explanations of Playwright and CodeQL workflows
  - `docs/github-actions-interview-qa.txt` — 22 interview questions and answers covering CI/CD, GitHub Actions, and automation best practices
  - Clear diagrams and workflow explanations for educational purposes

- **Page Object Model (POM) Restructuring**
  - Moved page objects from `tests/ui/pages/` to root-level `pages/` folder (industry best practice)
  - Created `POM_STRUCTURE.md` with comprehensive documentation on POM implementation
  - Updated all test imports to reference new page object locations

- **Reusable Utility Helpers** (`utils/` folder)
  - `waitHelpers.ts` — Common wait patterns (waitForElementToBeClickable, waitForPageLoad, waitForNavigation, etc.)
  - `commonAssertions.ts` — Centralized assertion methods (assertElementVisible, assertPageTitle, etc.)
  - `browserActions.ts` — Common browser interactions (fillInput, clickElement, selectDropdownOption, takeScreenshot, etc.)
  - `testConfig.ts` — Configuration management (TestConfig, RetryConfig, TestDataConstants) with environment detection
  - `index.ts` — Central export point for clean imports across test files

- **Documentation Improvements**
  - Updated `README.md` with POM architecture details and CI/CD overview
  - Added usage examples for utilities and page objects
  - Documented project structure with latest changes
  - Added section on GitHub Actions workflows and local test execution

### Changed

- Reorganized project structure to follow enterprise-grade POM best practices
- Test imports updated: `import { SignupPage } from '../../../pages/signupPage'`
- Utilities centralized with single import point: `import { WaitHelpers, BrowserActions } from '../utils'`

### Notes

- Both GitHub Actions workflows (Playwright Tests and CodeQL) run automatically on push and pull request
- Project now demonstrates production-ready test automation patterns
- All utilities follow TypeScript best practices with full documentation and type safety

## [1.1.0] - 2026-06-01

### Added

- Page Object Model (POM) restructuring completed: moved page objects to `pages/` and updated test imports
- Reusable utility helpers added in `utils/`: `waitHelpers.ts`, `commonAssertions.ts`, `browserActions.ts`, `testConfig.ts`, and `index.ts`
- Comprehensive documentation added under `docs/`: `PROJECT_UPDATE.md`, `github-actions-complete-guide.html`, and `github-actions-interview-qa.txt`
- CI/CD improvements and documentation for Playwright and CodeQL workflows

### Changed

- `README.md` and `CHANGELOG.md` updated to reflect the new POM structure and utilities
- Test specs updated to import page objects from the new `pages/` folder

### Fixed

- Minor import path fixes in tests after folder restructuring
- Documentation links and file references corrected

## [1.0.0] - 2026-05-25

### Added

- Playwright test project setup with HTML reporting
- Cross-browser configuration for Chromium, Firefox, and WebKit
- Homepage UI test coverage
- Signup UI test flow using a page object model
- Dynamic signup data generation for unique emails
- Basic Playwright example specs

### Notes

- The current UI tests target the live Automation Exercise website
- API spec directory is present but does not yet contain executable test files

## [0.9.0] - 2026-05-10

### Added

- Initial signup flow test and foundational page objects
- Basic Playwright test scaffolding and reporting

### Fixed

- Minor test stability and selector tuning

## [0.8.0] - 2026-04-15

### Added

- Cross-browser configuration added for Chromium and Firefox
- Example homepage spec and basic assertions

### Fixed

- Dependency updates and environment configuration tweaks

## [0.7.0] - 2026-03-01

### Added

- Project initialization and basic repository setup
- `playwright.config.ts` and initial npm scripts

### Notes

- Initial proof-of-concept tests and repository structure
