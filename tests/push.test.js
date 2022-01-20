import { MockArray } from "../index";

describe("Given MockArray.push()", () => {
  describe("When inputed 23", () => {
    test("Then it should add 23 to the object MockArray.obj", () => {
      const instanciatedArray = {
        0: "",
      };

      const expectedResult = JSON.stringify({
        0: "",
        1: 23,
      });

      const valueToGive = 23;

      const iniciatedObject = new MockArray(instanciatedArray);
      iniciatedObject.push(valueToGive);

      expect(JSON.stringify(iniciatedObject.obj)).toBe(expectedResult);
    });
  });

  describe("When inputed empty string ''", () => {
    test("Then it should add '' to the object MockArray.obj", () => {
      const instanciatedArray = {
        0: "",
        1: 21,
        2: 43,
      };

      const expectedResult = JSON.stringify({
        0: "",
        1: 21,
        2: 43,
        3: "",
      });

      const valueToGive = "";

      const iniciatedObject = new MockArray(instanciatedArray);
      iniciatedObject.push(valueToGive);

      expect(JSON.stringify(iniciatedObject.obj)).toBe(expectedResult);
    });
  });
});
