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
        console.log(this.obj[key]);
        Object.defineProperty(newObj, key, {
          value: this.obj[key],
          enumerable: true,
          configurable: true,
        });
      }
      console.log(this.obj[key]);
    });
    console.log(Object.keys(newObj).length);
    return newObj;
  }

  map(actingFunc) {
    const returnedObject = {};

    Object.keys(this.obj).forEach((key) => {
      this.obj[key] = actingFunc(this.obj[key]);
      /* returnedObject = this.push({
        "`${this.obj[key]}`": actingFunc(this.obj[key]),
      }); */
    });
    return this.obj;
  }
}

const even = (number) => number % 2 === 0;
const sum = (number) => number + 2;

const instanciatedArray = {
  a: 1,
  b: 2,
  c: 4,
};

const a = new MockArray(instanciatedArray);
a.filter(even);

export { even, MockArray, sum };
