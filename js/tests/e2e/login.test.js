// const { test, expect } = require("@playwright/test");
// require("dotenv").config();

// test("User can log in with valid credentials", async ({ page }) => {
//   await page.goto("http://127.0.0.1:5500/login");

//   // Use credentials from environment variables
//   await page.fill('[name="email"]', process.env.LOGIN_EMAIL);
//   await page.fill('[name="password"]', process.env.LOGIN_PASSWORD);
//   await page.click('button[type="submit"]');

//   // Assert successful login
//   await expect(page).toHaveURL("http://127.0.0.1:5500/");
// });

// test("User sees an error message with invalid credentials", async ({
//   page,
// }) => {
//   await page.goto("http://127.0.0.1:5500/login");

//   // Use invalid credentials
//   await page.fill('[name="email"]', "invalid@example.com");
//   await page.fill('[name="password"]', "wrongpassword");
//   await page.click('button[type="submit"]');

//   // Assert error message is displayed
//   const errorMessage = await page.locator("#message-container");
//   await expect(errorMessage).toContainText("Invalid credentials");
// });

// const { test, expect } = require("@playwright/test");
// require("dotenv").config();

// test("User can log in with valid credentials", async ({ page }) => {
//   await page.goto("http://127.0.0.1:5500/login");

//   // Use credentials from environment variables
//   await page.fill('[name="email"]', process.env.LOGIN_EMAIL);
//   await page.fill('[name="password"]', process.env.LOGIN_PASSWORD);
//   await page.click('button[type="submit"]');

//   // Assert successful login
//   await expect(page).toHaveURL("http://127.0.0.1:5500/");
// });

// test("User sees an error message with invalid credentials", async ({
//   page,
// }) => {
//   await page.goto("http://127.0.0.1:5500/login");

//   // Use invalid credentials
//   await page.fill('[name="email"]', "invalid@example.com");
//   await page.fill('[name="password"]', "wrongpassword");
//   await page.click('button[type="submit"]');

//   // Assert error message is displayed when invalid credentials are entered
//   const errorMessage = await page.locator("#message-container");
//   await expect(errorMessage).toBeVisible(); // Ensure error message is visible
//   await expect(errorMessage).toContainText("Invalid credentials"); // Check if error message contains "Invalid credentials"
// });

const { test, expect } = require("@playwright/test");
require("dotenv").config();

test("User can log in with valid credentials", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/login");

  // Use credentials from environment variables
  await page.fill('[name="email"]', process.env.LOGIN_EMAIL);
  await page.fill('[name="password"]', process.env.LOGIN_PASSWORD);
  await page.click('button[type="submit"]');

  // Assert successful login
  await expect(page).toHaveURL("http://127.0.0.1:5500/");
});

test("User sees an error message with invalid credentials", async ({
  page,
}) => {
  await page.goto("http://127.0.0.1:5500/login");

  // Use invalid credentials
  await page.fill('[name="email"]', "invalid@example.com");
  await page.fill('[name="password"]', "wrongpassword");
  await page.click('button[type="submit"]');

  // Assert error message is displayed when invalid credentials are entered
  const errorMessage = await page.locator("#message-container");
  await expect(errorMessage).toBeVisible(); // Ensure error message is visible
});
