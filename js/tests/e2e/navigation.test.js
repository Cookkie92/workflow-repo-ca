const { test, expect } = require("@playwright/test");

test("Navigates to home page and clicks on a venue", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/");

  // Wait for the venue list to load
  await expect(page.locator(".venue-list")).toBeVisible();

  // Click on the first venue
  await page.click(".venue-list .venue-item:first-child");

  // Verify venue details page loads
  await expect(page).toHaveURL(/venue\/\d+/);
  await expect(page.locator("h1")).toHaveText("Venue details");
});
