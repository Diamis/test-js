import { take } from "../src/4.8";

describe("4.8", () => {
  test("check take([1, 2, 3])", () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test("check take([1, 2, 3], 2)", () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test("check take([1, 2, 3], 5)", () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test("check take([1, 2, 3], 0)", () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
});
