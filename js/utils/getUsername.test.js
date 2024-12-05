import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage"; // Adjust the import path

describe("getUsername function", () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure isolated tests
    localStorage.clear();
  });

  it("should return the name from the user object in storage", () => {
    // Set a user object in localStorage using saveUser function
    const user = { name: "John Doe" };
    saveUser(user); // Use saveUser instead of directly setting in localStorage

    // Test if the name is returned
    expect(getUsername()).toBe("John Doe");
  });

  it("should return null when no user exists in storage", () => {
    // Ensure localStorage is empty
    localStorage.removeItem("user");

    // Test that the function returns null
    expect(getUsername()).toBeNull();
  });
});
