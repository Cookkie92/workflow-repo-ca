import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage";

describe("getUsername function", () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure isolated tests
    localStorage.clear();
  });

  it("should return the name from the user object in storage", () => {
    // Set a user object directly in localStorage
    const user = { name: "John Doe" };
    localStorage.setItem("user", JSON.stringify(user));

    // Test if the name is returned
    expect(getUsername()).toBe("John Doe");
  });

  it("should return null when no user exists in storage", () => {
    // Test that the function returns null
    expect(getUsername()).toBeNull();
  });
});
