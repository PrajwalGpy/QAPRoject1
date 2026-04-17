// pages/DynamicLoadingPage.js

class DynamicLoadingPage {
  constructor(page) {
    this.page = page;
    this.startButton = page.locator("button");
    this.loadingBar = page.locator("#loading");
    this.finishText = page.locator("#finish");
  }

  async gotoExample1() {
    await this.page.goto("/dynamic_loading/1");
  }

  async gotoExample2() {
    await this.page.goto("/dynamic_loading/2");
  }

  /**
   * Initiates the dynamic loading process and waits for the
   * final element to appear in the DOM.
   */
  async clickStart() {
    await this.startButton.click();
    await this.finishText.waitFor({ state: "visible" });
  }

  async getFinishText() {
    return await this.finishText.innerText();
  }
}

module.exports = { DynamicLoadingPage };
