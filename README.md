# Playwright-Framework

**Overview**
- **Project:**: A small Playwright + TypeScript test framework using the Page Object pattern for testing the Sauce Demo site (`https://www.saucedemo.com`).
- **Test runner:**: `@playwright/test` with HTML and Allure reporters configured in `playwright.config.ts`.

**Requirements**
- **Node.js:**: v16+ recommended.
- **Package manager:**: `npm` (tested commands use PowerShell on Windows).
- **Browsers:**: Playwright browser binaries (install with `npx playwright install`).

**Quick Setup**
- **Install dependencies:**

```powershell
npm install
```

- **Install Playwright browsers (if not already installed):**

```powershell
npx playwright install
```

**Run Tests**
- **Run all tests:**

```powershell
npx playwright test
```

- **Run a single test file:**

```powershell
npx playwright test tests/login.tests.ts
```

- **Run a specific test by name (filter):**

```powershell
npx playwright test -g "Successful login as standard user"
```

- **Run against the `chromium` project from `playwright.config.ts`:**

```powershell
npx playwright test --project=chromium
```

- **Show HTML report after a run:**

```powershell
npx playwright show-report
```

- **Allure reports (when `allure-playwright` reporter is used):**
	- Tests configured with `allure-playwright` will generate results in an `allure-results` folder.
	- Install Allure CLI (example): `npm i -g allure-commandline` or add a dev dependency.
	- To serve a report (example): `allure serve allure-results` or `allure generate --clean && allure open`.

**Project Structure**
- **`playwright.config.ts`**: Playwright configuration (testDir, reporters, projects, trace/video/screenshot settings).
- **`configs/config.ts`**: Project-specific config values (e.g., `baseUrl`, timeouts, headless flag).
- **`tests/`**: Test files (example: `tests/login.tests.ts`).
- **`pages/`**: Page Object classes (`BasePage.ts`, `LoginPage.ts`).
- **`models/`**: Simple typed models (e.g., `User`).
- **`data/`**: Test data instances (e.g., `Users.ts`).
- **`utils/`**: Helpers and utility functions.
- **`playwright-report/`**: Generated HTML report output (when produced).

**Key Implementation Details**
- **Page Object Pattern:**
	- `pages/BasePage.ts` provides a minimal base with `navigate(url: string)`.
	- `pages/LoginPage.ts` encapsulates locators and actions like `login(user: User)` and `isOnProductsPage()`.

- **Models & Test Data:**
	- `models/User.ts` defines a `User` class with `username` and `password`.
	- `data/Users.ts` exports a `Users` object with prepared users such as `StandardUser` and `PerformanceGlitchUser` used by tests.

- **Tests:**
	- Example tests are in `tests/login.tests.ts`. Tests use the `LoginPage` and `Users` test data, and the `configs/config.ts` `baseUrl` for navigation.
	- Tests are authored with `@playwright/test` and use `test.describe.parallel` and `test.beforeEach` hooks.

**Configuration Notes**
- `playwright.config.ts` sets `testDir: './tests'`, reporters `['html']` and `['allure-playwright']`, and common `use` options like traces, screenshots and video retention on failure.
- `configs/config.ts` contains `baseUrl`, `globalTimeout`, `defaultTimeout`, and `headless` which tests reference directly.

**Useful Tips**
- **Adding npm scripts (optional):** Add helpful scripts to `package.json`:

```json
"scripts": {
	"test": "npx playwright test",
	"test:headed": "npx playwright test --headed",
	"test:chromium": "npx playwright test --project=chromium",
	"report:show": "npx playwright show-report"
}
```

- **Debugging tests:**
	- Run single tests with `--debug` or use `test.only` locally.
	- Use `npx playwright show-trace <trace.zip>` to inspect traces produced on retry.

**Contributing / Extending**
- Add new Page Objects to `pages/` and export them for tests.
- Put reusable data in `data/` and typed models in `models/`.
- Add test utilities to `utils/helpers.ts` (currently present as a placeholder).

**Troubleshooting**
- If browsers are missing: run `npx playwright install`.
- If Allure report commands fail, ensure the Allure CLI is installed and available on `PATH`.
- If tests are flaky, enable `trace: 'on-first-retry'` and inspect `playwright-report` and `allure-results` for artifacts.

**Contact / Maintainer**
- If you need further help adjusting configuration, adding CI integration, or creating shared fixtures, open an issue or contact the repository owner.

---

This README was generated from repository source files and the configured Playwright setup. Update sections as the project grows (for example, add CI steps or npm scripts in `package.json`).
