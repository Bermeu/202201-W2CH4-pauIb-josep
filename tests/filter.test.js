import { even, MockArray } from "../index";

describe("Given MockArray.filter(even)", () => {
  describe("When inputed an object with 3 entries that where 2 comply with function even {a: 1, b: 2, c: 4}", () => {
    test("Then it should return {b: 2, c: 4}", () => {
      const instanciatedArray = {
        a: 1,
        b: 2,
        c: 4,
      };

      const expectedResult = JSON.stringify({
        b: 2,
        c: 4,
      });

      const iniciatedObject = new MockArray(instanciatedArray);
      const result = iniciatedObject.filter(even);

      expect(JSON.stringify(result)).toBe(expectedResult);
    });
  });
});
