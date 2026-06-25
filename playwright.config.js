// playwright.config.js
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // ─── Test Directory ───────────────────────────────────────────────
  testDir: './tests',

  // ─── Global Settings ──────────────────────────────────────────────
  timeout: 60_000,          // Each test gets 60 s
  expect: { timeout: 10_000 }, // Each assertion gets 10 s

  // Run all tests in parallel (safe here – read-only site)
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only
  forbidOnly: !!process.env.CI,

  // Retry once on CI to handle transient flakiness
  // retries: process.env.CI ? 1 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 2 : undefined,

  // ─── Reporter ─────────────────────────────────────────────────────
  reporter: [
    ['list'],                        // pretty console output
    ['html', { open: 'on-failure' }] // HTML report, auto-opens on failure
  ],

  // ─── Shared Context for All Tests ─────────────────────────────────
  use: {
    baseURL: 'https://the-internet.herokuapp.com',

    // Take a screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Record a video only when a test fails
    video: 'retain-on-failure',

    // Attach a trace on first retry (great for debugging CI failures)
    trace: 'on-first-retry',
  },

  // ─── Browser Projects ─────────────────────────────────────────────
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // Mobile smoke test (Chromium engine)
    // {
    //   name: 'mobile-chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],
});
