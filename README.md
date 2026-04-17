# 🦸 Internet Hero – UI Automation Test Suite

> Playwright JS test suite targeting **[The Internet (HerokuApp)](https://the-internet.herokuapp.com)**  
> Validates core web components: Form Auth, Dropdowns, Checkboxes, and Dynamic Loading.

---

## 📁 Project Structure

```text
internet-hero-suite/
│
├── pages/                          # Page Object Models (POM)
│   ├── LoginPage.js                # /login selectors + actions
│   ├── DropdownPage.js             # /dropdown selectors + actions
│   ├── CheckboxesPage.js           # /checkboxes selectors + actions
│   └── DynamicLoadingPage.js       # /dynamic_loading selectors + actions
│
├── tests/                          # Test files
│   ├── 01-form-auth.spec.js        # 5 tests  – Login / Logout / Error states
│   ├── 02-dropdowns-checkboxes.spec.js  # 8 tests – Dropdown selection + Checkbox toggle
│   └── 03-dynamic-loading.spec.js  # 5 tests – Auto-wait showcase (hidden + injected)
│
├── playwright.config.js            # Global config: browsers, retries, reporters
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
| Tool    | Version  |
|---------|----------|
| Node.js | ≥ 18 LTS |
| npm     | ≥ 9      |

### 1. Install dependencies
```bash
npm install
```

### 2. Install Playwright browsers
```bash
npx playwright install
```

---

## 🚀 Running the Tests

| Command                      | What it does                                     |
|------------------------------|--------------------------------------------------|
| `npm run test`               | Run all tests (headless, chromium & mobile-chrome) |
| `npm run test:headed`        | Run with visible browser windows                 |
| `npm run test:ui`            | Open Playwright's interactive UI mode            |
| `npm run test:report`        | Open the last HTML report                        |
| `npm run test:auth`          | Run only Form Authentication tests               |
| `npm run test:dropdowns`     | Run only Dropdown & Checkbox tests               |
| `npm run test:dynamic`       | Run only Dynamic Loading tests                   |

### Run a single test by title
```bash
npx playwright test -g "login with correct username and password"
```

### Run on a single browser
```bash
npx playwright test --project=chromium
```

---

## 🧪 Test Coverage

### `01-form-auth.spec.js` — Form Authentication (5 tests)
| # | Test | Assertion |
|---|------|-----------|
| 1 | valid login | Flash message contains "You logged into a secure area!" and URL changes to /secure |
| 2 | logout test | Redirects to `/login` + flash message contains "You logged out" |
| 3 | wrong username | Flash error + stays on `/login` |
| 4 | wrong password | Flash error + stays on `/login` |
| 5 | empty login | Username invalid error shown |

### `02-dropdowns-checkboxes.spec.js` — Dropdowns & Checkboxes (8 tests)
| # | Test | Assertion |
|---|------|-----------|
| 1 | Dropdown: default value | "Please select an option" is selected |
| 2 | Dropdown: select Option 1 | Selected text matches "Option 1" |
| 3 | Dropdown: select Option 2 | Selected text matches "Option 2" |
| 4 | Checkboxes: initial state | Checkbox 1 unchecked, Checkbox 2 checked |
| 5 | Checkboxes: check first box | Checkbox 1 is now checked |
| 6 | Checkboxes: uncheck second | Checkbox 2 is now unchecked |
| 7 | Checkboxes: check/uncheck 1 | State toggles properly to unchecked |
| 8 | Checkboxes: check both | Both checkboxes are checked |

### `03-dynamic-loading.spec.js` — Dynamic Loading (5 tests)
| # | Test | Description |
|---|------|-------------|
| 1 | Example 1: heading correct | Validates heading text is shown correctly |
| 2 | Example 1: loaded text shown | Element rendered hidden, then shown after clicking start |
| 3 | Example 1: loading bar | Verifies loading bar disappears upon finishing |
| 4 | Example 2: heading correct | Validates heading text is shown correctly |
| 5 | Example 2: loaded text shown | Element dynamically appended & rendered after clicking start |

---

## 🏗️ Design Patterns Used

### Page Object Model (POM)
All selectors and actions are **encapsulated in `pages/`**. Tests never contain raw selectors.  
This means when the UI changes, you fix it in **one place**, not across every test.

```javascript
// ✅ Good — POM in use
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.loginWithUser('tomsmith', 'SuperSecretPassword!');

// ❌ Bad — raw selectors in tests (brittle)
await page.fill('#username', 'tomsmith');
await page.fill('#password', 'SuperSecretPassword!');
await page.click('button[type="submit"]');
```

### Playwright Auto-Wait
Playwright automatically waits for elements to be actionable before every interaction.  
For dynamic content, Playwright's built-in auto-waiting prevents flakiness by verifying the actionability of elements (e.g., visible, attached, enabled) before performing actions.

---

## 📊 Reporters

- **`list`** — Clean terminal output during runs
- **`html`** — Full HTML report with screenshots, videos, and traces on failure

View the report after a run:
```bash
npm run test:report
```

---

## 📄 Resume Bullet Point

> *"Developed a UI Automation suite using Playwright JS to validate core web components including form authentication, dropdown selection, checkbox state management, and dynamic content loading. Implemented the Page Object Model pattern across 18 tests covering Desktop Chromium and Mobile Chrome."*

---

## 🔗 Resources

- [Playwright Docs](https://playwright.dev/docs/intro)
- [The Internet – HerokuApp](https://the-internet.herokuapp.com)
- [Playwright Auto-Waiting](https://playwright.dev/docs/actionability)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
