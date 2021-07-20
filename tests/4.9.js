import { unzip } from "../src/4.9";

describe("4.9", () => {
  test("check unzip([1, 2, 3], [4], [5, 6])", () => {
    expect(unzip([1, 2, 3], [4], [5, 6])).toEqual([
      [1, 4, 5],
      [2, undefined, 6],
      [3, undefined, undefined],
    ]);
  });

  test("check unzip([1, 2, 3])", () => {
    expect(unzip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  test("check unzip([1], [1, 2, 3], [4, 6, 7, 8, 9])", () => {
    expect(unzip([1], [1, 2, 3], [4, 6, 7, 8, 9])).toEqual([
      [1, 1, 4],
      [undefined, 2, 6],
      [undefined, 3, 7],
      [undefined, undefined, 8],
      [undefined, undefined, 9],
    ]);
  });

  test("check unzip({})", () => {
    expect(() => unzip({})).toThrowError("[object Object] is not array");
  });
});
