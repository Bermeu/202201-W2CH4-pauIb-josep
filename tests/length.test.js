import { MockArray } from "../index.js";

describe("Given MockArray.lenght", () => {
  describe("When inputed an object with 3 propperties", () => {
    test("It should return 3", () => {
      const expectedResult = 3;
      const valueToGive = {
        a: "",
        b: "",
        c: "",
      };

      const iniciatedObject = new MockArray(valueToGive);
      const result = iniciatedObject.length;

      expect(result).toBe(expectedResult);
    });
  });
});
