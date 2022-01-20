import { MockArray } from "../index";

describe("Given MockArray.push()", () => {
  describe("When inputed 23", () => {
    test("Then it should add 23 to the object MockArray.obj", () => {
      const instanciatedArray = {
        a: "",
      };

      const expectedResult = JSON.stringify({
        a: "",
        a0: 23,
      });

      const valueToGive = 23;

      const iniciatedObject = new MockArray(instanciatedArray);
      const result = iniciatedObject.push(valueToGive);

      expect(JSON.stringify(MockArray.obj)).toBe(expectedResult);
    });
  });
});
