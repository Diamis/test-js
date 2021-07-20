import { omit } from "../src/4.6";

describe("4.6", () => {
  test("check omit({ name: 'Benjy', age: 18 }, ['name']) to { age: 18 }", () => {
    const res = omit({ name: "Benjy", age: 18 }, ["name"]);
    expect(res).toEqual({ age: 18 });
  });
});
