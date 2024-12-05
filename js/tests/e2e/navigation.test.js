// const { test, expect } = require("@playwright/test");

// test("Navigates to home page and clicks on a venue", async ({ page }) => {
//   await page.goto("http://127.0.0.1:5500/");

//   // Wait for the venue list to load
//   const venueContainer = page.locator("#venue-container");
//   await expect(venueContainer).toBeVisible();

//   // Wait for the first venue to load and be clickable
//   const firstVenue = venueContainer.locator("a:first-child"); // assuming each venue is an <a> element
//   await expect(firstVenue).toBeVisible();
//   await expect(firstVenue).toBeEnabled(); // Ensure it's clickable

//   // Click on the first venue
//   await firstVenue.click();

//   // Wait for the heading to update and contain the correct text
//   const heading = await page.locator("h1");
//   await expect(heading).toHaveText(/Venue details/); // Wait for the heading to contain "Venue details"

//   // Verify the URL after clicking the venue
//   await expect(page).toHaveURL(/venue\/\?id=[a-f0-9-]+/);
// });
