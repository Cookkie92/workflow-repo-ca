const { test, expect } = require("@playwright/test");
require("dotenv").config();

test("User can log in with valid credentials", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/login");

  // Use credentials from environment variables
  await page.fill("#email", process.env.LOGIN_EMAIL);
  await page.fill("#password", process.env.LOGIN_PASSWORD);
  await page.click('button[type="submit"]');

  // Assert successful login
  await expect(page).toHaveURL("http://127.0.0.1:5500/");
});

test("User sees an error message with invalid credentials", async ({
  page,
}) => {
  await page.goto("http://127.0.0.1:5500/login");

  // Use invalid credentials
  await page.fill("#email", "invalid@example.com");
  await page.fill("#password", "wrongpassword");
  await page.click('button[type="submit"]');

  // Assert error message is displayed
  const errorMessage = await page.locator("#message-container");
  await expect(errorMessage).toContainText("Invalid credentials");
});
