import { even, MockArray } from "../index";

describe("Given MockArray.some(even)", () => {
  describe("When inputed an object with 3 that complies with function even", () => {
    test("It should return true", () => {
      const expectedResult = true;
      const valueToGive = {
        a: 1,
        b: 2,
        c: 3,
      };

      const iniciatedObject = new MockArray(valueToGive);
      const result = iniciatedObject.some(even);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When inputed an object with 3  DOES NOT complies with function even", () => {
    test("It should return false", () => {
      const expectedResult = false;
      const valueToGive = {
        a: 1,
        b: 5,
        c: 3,
      };

      const iniciatedObject = new MockArray(valueToGive);
      const result = iniciatedObject.some(even);

      expect(result).toBe(expectedResult);
    });
  });
});
