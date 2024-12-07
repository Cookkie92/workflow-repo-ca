// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    // Update the include path to directly look inside js/utils for the test files
    include: ["js/utils/**/*.{test,spec}.js"], // This includes any .test.js or .spec.js files in js/utils
  },
});
