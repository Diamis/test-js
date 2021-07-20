import {
  roman,
  TYPE_ERROR,
  RANGE_ERROR,
  UNKNOWN_SYMBOLS,
} from "../src/4.1";

describe("4.1", () => {
  test("check 1 to I", () => {
    expect(roman(1)).toEqual("I");
  });
  test("check 1904 to MCMIV", () => {
    expect(roman(1904)).toEqual("MCMIV");
  });
  test("check MCMXC to 1990", () => {
    expect(roman("MCMXC")).toEqual(1990);
  });
  test("check mcMxC to 1990", () => {
    expect(roman("mcMxC")).toEqual(1990);
  });
  test("check 2017 to MMXVII", () => {
    expect(roman("2017")).toEqual("MMXVII");
  });

  test("check true to TYPE_ERROR", () => {
    expect(() => roman(true)).toThrowError(TYPE_ERROR);
  });
  test("check null to TYPE_ERROR", () => {
    expect(() => roman(null)).toThrowError(TYPE_ERROR);
  });
  test("check undefanid to TYPE_ERROR", () => {
    expect(() => roman(undefined)).toThrowError(TYPE_ERROR);
  });

  test("check NaN to UNKNOWN_SYMBOLS", () => {
    expect(() => roman(NaN)).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check 19a04 to UNKNOWN_SYMBOLS", () => {
    expect(() => roman("19a04")).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check 1.8 (number) to UNKNOWN_SYMBOLS", () => {
    expect(() => roman(1.8)).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check 1.8 (string) to UNKNOWN_SYMBOLS", () => {
    expect(() => roman("1.8")).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check 1-5 (string) to UNKNOWN_SYMBOLS", () => {
    expect(() => roman("1-5")).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check '' to UNKNOWN_SYMBOLS", () => {
    expect(() => roman("")).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check VVVV to UNKNOWN_SYMBOLS", () => {
    expect(() => roman("VVVV")).toThrowError(UNKNOWN_SYMBOLS);
  });
  test("check xxxxx to UNKNOWN_SYMBOLS", () => {
    expect(() => roman("xxxxx")).toThrowError(UNKNOWN_SYMBOLS);
  });

  test("check < 1 to RANGE_ERROR", () => {
    expect(() => roman(0)).toThrowError(RANGE_ERROR);
  });
  test("check >3999 to RANGE_ERROR", () => {
    expect(() => roman(4000)).toThrowError(RANGE_ERROR);
  });
  test("check -15 (number) to RANGE_ERROR", () => {
    expect(() => roman(-15)).toThrowError(RANGE_ERROR);
  });
  test("check -15 (string) to RANGE_ERROR", () => {
    expect(() => roman("-15")).toThrowError(RANGE_ERROR);
  });
});
