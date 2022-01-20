import { even, MockArray } from "./index.js";

describe("Given MockArray", () => {
  describe("When it recives 3", () => {
    test("It should throw and error with the msg 'Input object lenght cannot be 0'", () => {
      const expectedError = "Input object lenght cannot be 0";
      const valueToGive = 3;

      expect(() => {
        const generatedArrayObject = new MockArray(valueToGive);
      }).toThrow(expectedError);
    });
  });
});
