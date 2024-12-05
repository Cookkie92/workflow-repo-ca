// import { describe, it, expect } from "vitest";

// const getUserName = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return user ? user.name : null;
// };

// describe("getUserName", () => {
//   it("returns the name from the user object in storage", () => {
//     localStorage.setItem("user", JSON.stringify({ name: "John Doe" }));
//     expect(getUserName()).toBe("John Doe");
//   });

//   it("returns null when no user exists in storage", () => {
//     localStorage.removeItem("user");
//     expect(getUserName()).toBe(null);
//   });
// });
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUserName } from "../utils/getUserName";
import { saveUser, clearStorage } from "../utils/storage";

describe("getUserName", () => {
  beforeEach(() => {
    // Setup mock user object in storage before each test
    saveUser({ name: "John Doe" });
  });

  afterEach(() => {
    // Clear the storage after each test
    clearStorage();
  });

  it("Returns the name from the user object in storage", () => {
    expect(getUserName()).toBe("John Doe");
  });

  it("Returns null when no user exists in storage", () => {
    clearStorage();
    expect(getUserName()).toBeNull();
  });
});
