const { test, expect } = require("@playwright/test");
const { DynamicLoadingPage } = require("../pages/DynamicLoadingPage");

test.describe("Dynamic Loading Example 1", () => {
  test("check heading is correct", async ({ page }) => {
    const dlPage = new DynamicLoadingPage(page);
    await dlPage.gotoExample1();

    await expect(page.locator("h4").first()).toHaveText(
      "Example 1: Element on page that is hidden",
    );
  });

  test("should show hello world after clicking start", async ({ page }) => {
    const dlPage = new DynamicLoadingPage(page);
    await dlPage.gotoExample1();

    await expect(dlPage.finishText).toBeHidden();
    await dlPage.clickStart();

    const text = await dlPage.getFinishText();
    expect(text).toContain("Hello World!");
    await expect(dlPage.finishText).toBeVisible();
  });

  test("loading bar goes away", async ({ page }) => {
    const dlPage = new DynamicLoadingPage(page);
    await dlPage.gotoExample1();

    await dlPage.clickStart();

    await expect(dlPage.loadingBar).toBeHidden();
  });
});

test.describe("Dynamic Loading Example 2", () => {
  test("check heading for example 2", async ({ page }) => {
    const dlPage = new DynamicLoadingPage(page);
    await dlPage.gotoExample2();

    await expect(page.locator("h4").first()).toHaveText(
      "Example 2: Element rendered after the fact",
    );
  });

  test("should show hello world after loading", async ({ page }) => {
    const dlPage = new DynamicLoadingPage(page);
    await dlPage.gotoExample2();

    await dlPage.clickStart();

    const text = await dlPage.getFinishText();
    expect(text).toContain("Hello World!");
  });
});

