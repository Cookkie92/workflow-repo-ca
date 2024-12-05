import { describe, it, expect } from "vitest";
import { isActivePath } from "./isActivePath"; // Adjusted import path

describe("isActivePath function", () => {
  it("should return true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it("should return true for root path when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  it("should return true when current path includes the href", () => {
    expect(isActivePath("/about/team", "/about")).toBe(true);
    expect(isActivePath("/services/overview", "/services")).toBe(true);
  });

  it("should return false when paths don't match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
    expect(isActivePath("/about", "/about/team")).toBe(false);
  });
});
