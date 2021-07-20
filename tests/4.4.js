import { add } from "../src/4.4";

describe("4.4", () => {
  test("check add() to 0", () => {
    expect(add()).toBe(0);
  });

  test("check add(1)() to 1", () => {
    expect(add(1)()).toBe(1);
  });

  test("check add(1)(2)() to 3", () => {
    expect(add(1)(2)()).toBe(3);
  });

  test("check add(1.2)('2')(3)() to 6", () => {
    expect(add(1.2)("2")(3)()).toBe(6.2);
  });
});
