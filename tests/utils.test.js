import { even, sum2 } from "../index";

describe("Given sum2()", () => {
  describe("When inputed 3", () => {
    test("Then it should return 5", () => {});
    const valToGive = 3;
    const expectedResult = 5;

    const result = sum2(valToGive);

    expect(result).toBe(expectedResult);
  });

  describe("When inputed 'asdfs'", () => {
    test("Then it should return 'asdfs2'", () => {});
    const valToGive = "asdfs";
    const expectedResult = "asdfs2";

    const result = sum2(valToGive);

    expect(result).toBe(expectedResult);
  });
});

describe("Given even()", () => {
  describe("When inputed 3", () => {
    test("Then it should return false", () => {});
    const valToGive = 3;
    const expectedResult = false;

    const result = even(valToGive);

    expect(result).toBe(expectedResult);
  });

  describe("When inputed 'asdfs'", () => {
    test("Then it should return false", () => {});
    const valToGive = "asdfs";
    const expectedResult = false;

    const result = even(valToGive);

    expect(result).toBe(expectedResult);
  });

  describe("When inputed 4", () => {
    test("Then it should return true", () => {});
    const valToGive = 4;
    const expectedResult = true;

    const result = even(valToGive);

    expect(result).toBe(expectedResult);
  });
});
