const { test, expect } = require("@playwright/test");
const { DropdownPage } = require("../pages/DropdownPage");
const { CheckboxesPage } = require("../pages/CheckboxesPage");

test.describe("Dropdown Tests", () => {
  test("default value should be correct", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.goto();

    const selected = await dropdownPage.getSelectedText();
    expect(selected).toBe("Please select an option");
  });

  test("test selecting option 1", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.goto();

    await dropdownPage.selectByText("Option 1");

    const selected = await dropdownPage.getSelectedText();
    expect(selected).toBe("Option 1");
  });

  test("test selecting option 2", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.goto();

    await dropdownPage.selectByText("Option 2");

    const selected = await dropdownPage.getSelectedText();
    expect(selected).toBe("Option 2");
  });
});

test.describe("Checkboxes Tests", () => {
  test("check initial state", async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.goto();

    await expect(checkboxesPage.checkbox1).not.toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();
  });

  test("should check the first box", async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.goto();

    await checkboxesPage.checkFirst();
    await expect(checkboxesPage.checkbox1).toBeChecked();
  });

  test("should uncheck the second box", async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.goto();

    await checkboxesPage.uncheckSecond();
    await expect(checkboxesPage.checkbox2).not.toBeChecked();
  });

  test("check and then uncheck box 1", async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.goto();

    await checkboxesPage.checkFirst();
    await expect(checkboxesPage.checkbox1).toBeChecked();

    await checkboxesPage.uncheckFirst();
    await expect(checkboxesPage.checkbox1).not.toBeChecked();
  });

  test("check both boxes", async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.goto();

    await checkboxesPage.checkFirst();
    await checkboxesPage.checkSecond();

    await expect(checkboxesPage.checkbox1).toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();
  });
});
