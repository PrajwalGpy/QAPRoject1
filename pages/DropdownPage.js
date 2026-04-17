// pages/DropdownPage.js

class DropdownPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator("#dropdown");
  }

  async goto() {
    await this.page.goto("/dropdown");
  }

  async selectByText(text) {
    await this.dropdown.selectOption({ label: text });
  }

  async getSelectedText() {
    // Returns the visible text of the currently selected option
    return await this.dropdown.evaluate(
      (el) => el.options[el.selectedIndex].text,
    );
  }
}

module.exports = { DropdownPage };
