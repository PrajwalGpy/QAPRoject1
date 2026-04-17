// pages/LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.submitButton = page.locator('button[type="submit"]');
    this.messageBar = page.locator("#flash");
  }

  async goto() {
    await this.page.goto("/login");
  }

  /**
   * Performs the login action with provided credentials.
   * @param {string} username
   * @param {string} password
   */
  async loginWithUser(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }

  async clickLogout() {
    await this.page.getByRole("link", { name: "Logout" }).click();
  }
}

module.exports = { LoginPage };
