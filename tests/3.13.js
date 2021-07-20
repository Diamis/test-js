import { quickSort, partition } from "../src/3.13";

describe("3.13", () => {
  test("check partition", () => {
    const data = [6, 5, 3, 1, 8, 7, 2, 4];
    partition(data);
    expect(data).toEqual([3, 1, 2, 4, 8, 7, 6, 5]);
  });

  test("quick sort", () => {
    const data = [6, 5, 3, 1, 8, 7, 2, 4];
    quickSort(data);
    expect(data).toEqual([3, 1, 2, 4, 8, 7, 6, 5].sort());
  });
});
