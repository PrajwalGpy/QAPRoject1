// pages/CheckboxesPage.js

class CheckboxesPage {
  constructor(page) {
    this.page = page;
    this.checkbox1 = page.locator('input[type="checkbox"]').first();
    this.checkbox2 = page.locator('input[type="checkbox"]').last();
  }

  async goto() {
    await this.page.goto("/checkboxes", { waitUntil: "domcontentloaded" });
  }

  async checkFirst() {
    await this.checkbox1.check();
  }

  async uncheckFirst() {
    await this.checkbox1.uncheck();
  }

  async checkSecond() {
    await this.checkbox2.check();
  }

  async uncheckSecond() {
    await this.checkbox2.uncheck();
  }
}

module.exports = { CheckboxesPage };
