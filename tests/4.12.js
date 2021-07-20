import { rle } from "../src/4.12";

describe("4.12", () => {
  test("check rle", () => {
    expect(
      rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    ).toBe("A4B3C2XYZD4E3F3A6B28");
  });
});
