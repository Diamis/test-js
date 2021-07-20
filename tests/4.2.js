import { tree, TYPE_ERROR } from "../src/4.2";

describe("4.2", () => {
  test("check 6 (number)", () => {
    const expected =
      "    *    \n   ***   \n  *****  \n ******* \n*********\n    |    \n";
    expect(tree(6)).toStrictEqual(expected);
  });

  test("check 5 (number)", () => {
    const expected = "   *   \n  ***  \n ***** \n*******\n   |   \n";
    expect(tree(5)).toStrictEqual(expected);
  });

  test("check 5 (string)", () => {
    const expected = "   *   \n  ***  \n ***** \n*******\n   |   \n";
    expect(tree("5")).toStrictEqual(expected);
  });

  test("check true to TYPE_ERROR", () => {
    expect(() => tree(true)).toThrowError(TYPE_ERROR);
  });

  test("check 5f to TYPE_ERROR", () => {
    expect(() => tree("5f")).toThrowError(TYPE_ERROR);
  });

  test("check 5.5 to TYPE_ERROR", () => {
    expect(() => tree("5.5")).toThrowError(TYPE_ERROR);
  });

  test("check < 3 to null", () => {
    expect(tree(2)).toEqual(null);
  });
});
