import React from 'react';

import { add } from "../src/calculator";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number for single input", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum for two comma-separated numbers", () => {
    expect(add("2,3")).toBe(5);
  });

  test("returns sum for multiple comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("handles newline as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws error for single negative", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
  });

  test("throws error for multiple negatives", () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed: -1,-2");
  });
});
