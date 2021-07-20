import { classNames } from "../src/4.7";

describe("4.6", () => {
  test('check classNames("foo", "bar")', () => {
    expect(classNames("foo", "bar")).toBe("foo bar");
  });

  test('check classNames("foo", { bar: true })', () => {
    expect(classNames("foo", { bar: true })).toBe("foo bar");
  });

  test('check classNames({ "foo-bar": true })', () => {
    expect(classNames({ "foo-bar": true })).toBe("foo-bar");
  });

  test('check classNames({ "foo-bar": false })', () => {
    expect(classNames({ "foo-bar": false })).toBe("");
  });

  test("check classNames({ foo: true }, { bar: true })", () => {
    expect(classNames({ foo: true }, { bar: true })).toBe("foo bar");
  });

  test("check classNames({ foo: true, bar: true })", () => {
    expect(classNames({ foo: true, bar: true })).toBe("foo bar");
  });

  test('check classNames("foo", { bar: true, duck: false }, "baz", { quux: true })', () => {
    expect(
      classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
    ).toBe("foo bar baz quux");
  });

  test('check classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")', () => {
    expect(
      classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
    ).toBe("bar 1");
  });

  test("check classNames('bar', [1, null, 'baz'], {baz: true}, '3')", () => {
    expect(classNames("bar", [1, null, "baz"], { baz: true }, "3")).toBe(
      "bar 1 baz baz 3"
    );
  });

  test("check classNames('bar', [1, null, 'baz', ['foo', 'test']], {baz: true}, '3')", () => {
    expect(
      classNames("bar", [1, null, "baz", ["foo", "test"]], { baz: true }, "3")
    ).toBe("bar 1 baz foo test baz 3");
  });
});
