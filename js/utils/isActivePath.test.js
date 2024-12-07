import { describe, it, expect } from "vitest";
import { isActivePath } from "./isActivePath";

describe("isActivePath function", () => {
  it("should return true when current path matches href exactly", () => {
    expect(isActivePath("/login/", "/login/")).toBe(true);
    expect(isActivePath("/register/", "/register/")).toBe(true);
    expect(isActivePath("/venue/", "/venue/")).toBe(true);
  });

  it("should return true for root path when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  it("should return true when current path includes the href", () => {
    expect(isActivePath("/venue/details/", "/venue/")).toBe(true);
  });

  it("should return false when paths don't match", () => {
    expect(isActivePath("/login/", "/register/")).toBe(false);
    expect(isActivePath("/venue/details/", "/login/")).toBe(false);
  });
});
