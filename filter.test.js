class MockArray {
  obj = {};

  filter(actingFunc) {
    let returnedObject = {};

    Object.keys(this.obj).forEach((key) => {
      if (actingFunc(this.obj[key])) {
        returnedObject.push({ "`${this.obj[key]}`": this.obj[key] });
      }
    });
    return returnedObject;
  }
}

describe("Given a filter method and obj={a0:1, a1:2}", () => {
  describe("When it (x) => x+2", () => {
    test("Then it should return {a0:3, a1:4}", () => {
      const functionParameter = (x) => x + 2;
      const object = new MockArray();
      const expectedValue = { a0: 3, a1: 4 };

      const expectedObject = object.filter(functionParameter);

      expect(expectedObject).toBe(expectedValue);
    });
  });
});
