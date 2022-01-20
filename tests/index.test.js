/* eslint-disable no-new */
import { MockArray } from "../index.js";

describe("Given MockArray", () => {
  describe("When it recives 3", () => {
    test("It should throw and error with the msg 'Input object lenght cannot be 0'", () => {
      const expectedError = "Input is not an object!";
      const valueToGive = 3;

      expect(() => {
        new MockArray(valueToGive);
      }).toThrow(expectedError);
    });
  });

  describe("When it recives {}", () => {
    test("It should throw and error with the msg 'Input object lenght cannot be 0'", () => {
      const expectedError = "Input object lenght cannot be 0";
      const valueToGive = {};

      expect(() => {
        new MockArray(valueToGive);
      }).toThrow(expectedError);
    });
  });
});
