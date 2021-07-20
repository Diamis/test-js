import { compress } from "../src/4.11";

describe("4.11", () => {
  test("check compress([1, 4, 5, 2, 3, 9, 8, 11, 0])", () => {
    expect(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])).toEqual("0-5,8-9,11");
  });

  test("check compress([1, 4, 3, 2])", () => {
    expect(compress([1, 4, 3, 2])).toEqual("1-4");
  });

  test("check compress([1, 4])", () => {
    expect(compress([1, 4])).toEqual("1,4");
  });
});
