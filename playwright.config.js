// playwright.config.js
module.exports = {
  testDir: "js/tests/e2e",
  timeout: 30000,
  use: {
    headless: true, // Run tests in headless mode
    browserName: "chromium", // Use Chromium for tests
  },
};
