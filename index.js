class MockArray {
  obj;

  constructor(entryObj) {
    if (typeof entryObj !== "object") {
      throw new Error("Input is not an object!");
    }
    if (Object.keys(entryObj).length === 0) {
      throw new Error("Input object lenght cannot be 0");
    }

    this.obj = entryObj;
  }

  get length() {
    return Object.keys(this.obj).length;
  }

  push(newValue) {
    this.obj[this.length] = newValue;
  }

  some(actingFunc) {
    let response = false;

    Object.keys(this.obj).forEach((key) => {
      if (actingFunc(this.obj[key])) {
        response = true;
      }
    });
    return response;
  }

  find(actingFunc) {
    let elementToReturn;
    let fistElement = true;

    Object.keys(this.obj).forEach((key) => {
      if (actingFunc(this.obj[key]) && fistElement) {
        elementToReturn = this.obj[key];
        fistElement = false;
      }
    });
    return elementToReturn;
  }

  filter(actingFunc) {
    const newObj = {};

    Object.keys(this.obj).forEach((key) => {
      if (actingFunc(this.obj[key])) {
        Object.defineProperty(newObj, key, {
          value: this.obj[key],
          enumerable: true,
          configurable: true,
        });
      }
    });
    return newObj;
  }

  map(actingFunc) {
    const newObj = {};

    Object.keys(this.obj).forEach((key) => {
      const newVal = actingFunc(this.obj[key]);
      Object.defineProperty(newObj, key, {
        value: newVal,
        enumerable: true,
        configurable: true,
      });
    });
    return newObj;
  }
}

const even = (number) => number % 2 === 0;
const sum2 = (number) => number + 2;

export { even, MockArray, sum2 };
