# Workflow repo for the CA

# Overview

This project is designed to streamline workflows, including testing and UI interactions. It uses Vitest for unit testing, Playwright for end-to-end (e2e) testing, and integrates ESLint and Prettier for code linting and formatting. Git hooks ensure code quality during commits.

Table of Contents
Installation Instructions
Scripts
Testing
Unit Tests (Vitest)
End-to-End Tests (Playwright)
Environment Variables
Code Formatting & Linting
Contributing
Installation Instructions
Follow these steps to set up the project:

## Clone the repository:

git clone https://github.com/your-username/workflow-repo.git
cd workflow-repo

## Install dependencies:

npm install  
Create an .env file based on .env.example and configure the required variables (see Environment Variables below).

Scripts
Run tailwind:

npm run dev

# Run Unit Tests (Vitest):

npm run test

# Run Unit Tests with Vitest UI:

npm run test:ui

# Run End-to-End Tests (Playwright):

npx playwright test

# Run Linting:

npm run lint

# Run Prettier Formatting:

npm run format

## Testing

Unit Tests (Vitest)
The project uses Vitest to test specific functions:

Test Cases:
isActivePath function:

Returns true when the current path matches the href exactly.
Returns true for the root path (/) when the path is / or /index.html.
Returns true when the current path includes the href.
Returns false when paths don’t match.
getUserName function:

Returns the name from the user object stored in local storage.
Returns null when no user exists in local storage.

# Run Vitest tests using:

npm run test

# For a better UI experience:

npm run test:ui

# End-to-End Tests (Playwright)

The project uses Playwright to simulate user interactions and verify UI workflows.

Test Cases:
Login Test:

User successfully logs in with valid credentials (from .env).
Displays an error message with invalid credentials.
Navigation Test:

Navigates to the home page.
Waits for the venue list to load.
Clicks the first venue.
Verifies that the "Venue details" page loads with the heading "Venue details."

# Run Playwright tests using:

npx playwright test

# Environment Variables

The following variables must be defined in an .env file for the project to function correctly:

VITE_LOGIN_USERNAME=your-username  
VITE_LOGIN_PASSWORD=your-password  
Ensure the .env file is included in .gitignore to protect sensitive information. An example configuration is provided in .env.example.

# Code Formatting & Linting

ESLint: Enforces code quality and best practices for JavaScript.
Prettier: Formats code to maintain consistent style.
Git Hooks
Pre-commit hooks ensure all code is linted and formatted before commits:

JavaScript files: Automatically formatted with Prettier and linted with ESLint.
HTML files: Automatically formatted with Prettier.
Commits will fail if the code does not adhere to the style guide. Fix issues before committing.

Contributing
To contribute to the project:

Fork the repository.
Create a new branch for your changes.
Submit a pull request with a clear description of your work.
For questions or issues, open an issue in the repository.
