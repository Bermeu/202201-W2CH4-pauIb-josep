import { even, MockArray } from "../index";

describe("Given MockArray.find(even)", () => {
  describe("When inputed an object with 3 entries that where 2 comply with function even", () => {
    test("It should return 2", () => {
      const expectedResult = 2;
      const valueToGive = {
        a: 1,
        b: 2,
        c: 4,
      };

      const iniciatedObject = new MockArray(valueToGive);
      const result = iniciatedObject.find(even);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When inputed an object with 3 entries that where 1 complies with function even", () => {
    test("It should return 4", () => {
      const expectedResult = 4;
      const valueToGive = {
        a: 1,
        b: 3,
        c: 4,
      };

      const iniciatedObject = new MockArray(valueToGive);
      const result = iniciatedObject.find(even);

      expect(result).toBe(expectedResult);
    });
  });
});
