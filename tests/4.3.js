import { euclid } from "../src/4.3";

describe("4.3", () => {
  test("check euclid(6006, 3738735, 51051) to 3003", () => {
    expect(euclid(6006, 3738735, 51051)).toBe(3003);
  });
  test("check euclid(7) to 7", () => {
    expect(euclid(7)).toBe(7);
  });
  test("euclid(-421, 0.9923501, 3.1401525235324, -228.148832269) to -1", () => {
    expect(euclid(-421, 0.9923501, 3.1401525235324, -228.148832269)).toBe(-1);
  });
});
