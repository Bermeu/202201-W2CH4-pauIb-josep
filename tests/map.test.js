import { MockArray } from "../index";

describe("Given a map method and obj={}", () => {
  describe("When it receives 23", () => {
    test("Then it should return  {a0:23}", () => {
      const value = 23;
      const object = new MockArray();
      const expectedValue = { a0: 23 };

      const expectedObject = object.push(value);

      expect(expectedObject).toBe(expectedValue);
    });
  });
});
