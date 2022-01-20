class MockArray {
  obj = {};

  get length() {
    return Object.keys(this.obj).length;
  }

  push(value) {
    const lengthArray = this.length;
    this.obj[`property${lengthArray}`] = value;
  }
}

describe("Given a push method and obj={}", () => {
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
