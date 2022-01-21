import { sum2, MockArray } from "../index";

describe("Given MockArray.map()", () => {
  describe("When inputed that adds to to object {a: 3, b: 'a'}", () => {
    test("Then it should return {a: 5, b: 'a2'}", () => {
      const instanciatedArray = {
        a: 3,
        b: "a",
      };

      const expectedResult = JSON.stringify({
        a: 5,
        b: "a2",
      });

      const iniciatedObject = new MockArray(instanciatedArray);
      const result = iniciatedObject.map(sum2);

      expect(JSON.stringify(result)).toBe(expectedResult);
    });
  });
});
