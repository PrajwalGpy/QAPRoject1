const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test.describe("Login Page Tests", () => {
  test("login with correct username and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.loginWithUser("tomsmith", "SuperSecretPassword!");

    // Verify successful authentication and redirection
    await expect(loginPage.messageBar).toBeVisible();
    await expect(loginPage.messageBar).toContainText(
      "You logged into a secure area!",
    );
    await expect(page).toHaveURL(/secure/);
  });

  test("logout test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginWithUser("tomsmith", "SuperSecretPassword!");

    await loginPage.clickLogout();

    // Verify session termination and redirect to login
    await expect(page).toHaveURL(/login/);
    await expect(loginPage.messageBar).toContainText("You logged out");
  });

  test("login with wrong username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.loginWithUser("invalidUser", "SuperSecretPassword!");

    await expect(loginPage.messageBar).toBeVisible();
    await expect(loginPage.messageBar).toContainText(
      "Your username is invalid!",
    );
  });

  test("login with wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.loginWithUser("tomsmith", "wrongPassword");

    await expect(loginPage.messageBar).toContainText(
      "Your password is invalid!",
    );
  });

  test("empty login test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.loginWithUser("", "");

    await expect(loginPage.messageBar).toContainText(
      "Your username is invalid!",
    );
  });
});
