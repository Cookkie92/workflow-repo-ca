# Workflow repo for the CA

## Overview

This project is designed to manage workflows, including testing and UI interactions. It is configured with Vitest for unit testing and Playwright for end-to-end (e2e) testing. The project also uses ESLint and Prettier for code formatting and linting, with Git hooks to ensure code quality.

## Table of Contents

1. [Installation Instructions](#installation-instructions)
2. [Scripts](#scripts)
3. [Testing](#testing)
   - [Unit Tests (Vitest)](#unit-tests-vitest)
   - [End-to-End Tests (Playwright)](#end-to-end-tests-playwright)
4. [Environment Variables](#environment-variables)
5. [Code Formatting & Linting](#code-formatting--linting)
6. [Contributing](#contributing)

## Installation Instructions

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/workflow-repo.git
   cd workflow-repo
   ```

Unit Tests (Vitest)
Unit tests are configured with Vitest to test specific functions in the project.

To run the unit tests, execute:

npm run test - runs vitest on getusername and isactivepath

You can also use the Vitest UI for a better testing interface:

npm run test:ui - for better testing interface

The unit tests include the following functions:

isActivePath function:

Returns true when the current path matches the href exactly.
Returns true for the root path (/) when the path is / or /index.html.
Returns true when the current path includes the href.
Returns false when paths don't match.
getUserName function:

Returns the name from the user object in storage (first save a user object to storage).
Returns null when no user exists in storage.

End-to-End Tests (Playwright)
End-to-end tests are configured with Playwright for simulating real user interactions and testing UI behavior.

To run the end-to-end tests, execute

npx playwright test - tests login and navigation on the site

The e2e tests cover:

Login Test:

User can successfully log in with valid credentials from environment variables.
User sees an error message with invalid credentials.
Navigation Test:

Navigates to the home page.
Waits for the venue list to load.
Clicks the first venue.
Verifies that the venue details page loads with "Venue details" in the heading.

---

Environment Variables
The following environment variables are required for the application to run:

VITE_API_URL: The API URL for the application.
VITE_LOGIN_USERNAME: The username used for login.
VITE_LOGIN_PASSWORD: The password used for login.

Code Formatting & Linting
The project uses ESLint and Prettier for code formatting and linting. The following Git hooks are set up to ensure that code is properly formatted before being committed:

JavaScript files: Automatically formatted with Prettier and linted with ESLint.
HTML files: Automatically formatted with Prettier.
If you attempt to commit code that doesn't follow the style guide, the commit will be rejected until you fix the issues.

Contributing
Feel free to fork the project, make changes, and submit pull requests. For any issues or questions, open an issue in the repository.

Additional Notes:
Environment Configuration: The .env file is crucial for the Playwright e2e tests to function properly, as it contains login credentials and other necessary configurations.
Running Playwright: Playwright should be installed and configured correctly, and you may need to configure your environment or browser settings for Playwright to work as expected.
Let me know if you need any more changes or clarifications!
