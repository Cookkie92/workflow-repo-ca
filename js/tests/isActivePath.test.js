// import { describe, it, expect } from "vitest";

// const isActivePath = (currentPath, href) => {
//   if (currentPath === href) return true;
//   if ((currentPath === "/" || currentPath === "/index.html") && href === "/")
//     return true;
//   if (currentPath.includes(href)) return true;
//   return false;
// };

// describe("isActivePath", () => {
//   it("returns true when current path matches href exactly", () => {
//     expect(isActivePath("/about", "/about")).toBe(true);
//   });

//   it('returns true for root path ("/") when path is "/" or "/index.html"', () => {
//     expect(isActivePath("/", "/")).toBe(true);
//     expect(isActivePath("/index.html", "/")).toBe(true);
//   });

//   it("returns true when current path includes the href", () => {
//     expect(isActivePath("/about/team", "/about")).toBe(true);
//   });

//   it("returns false when paths do not match", () => {
//     expect(isActivePath("/about", "/contact")).toBe(false);
//   });
// });

import { describe, it, expect } from "vitest";
import { isActivePath } from "../utils/isActivePath";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    // Set current path to "/about"
    global.window.location.pathname = "/about";
    expect(isActivePath("/about")).toBe(true);
  });

  it('Returns true for root path ("/") when path is "/" or "/index.html"', () => {
    global.window.location.pathname = "/";
    expect(isActivePath("/")).toBe(true);
    global.window.location.pathname = "/index.html";
    expect(isActivePath("/")).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    global.window.location.pathname = "/products/1";
    expect(isActivePath("/products")).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    global.window.location.pathname = "/about";
    expect(isActivePath("/contact")).toBe(false);
  });
});
