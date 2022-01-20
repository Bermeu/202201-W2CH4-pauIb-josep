class MockArray {
  /* obj = {
         a: 0,
    b: 1,
    c: 1,
    d: 2, 
  }; */

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

  push(value) {
    const lengthArray = this.length;
    this.obj[`property${lengthArray}`] = value;
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
    const returnedObject = {};

    Object.keys(this.obj).forEach((key) => {
      if (!actingFunc(this.obj[key])) {
        /* returnedObject.push({ "`${this.obj[key]}`": this.obj[key] }); */
        delete this.obj[key];
      }
    });
    return this.obj;
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

const even = (element) => element % 2 === 0;
const addTwo = (element) => element + 2;

const arrayObject = {
  a: 2,
  b: "",
  c: "",
  d: 4,
};
// Begin of removable lines
const mockArrayInstanciated = new MockArray(arrayObject);

// console.log(mockArrayInstanciated.length);

// console.log(mockArrayInstanciated.some(even));

// console.log(mockArrayInstanciated.find(even));

// console.log(mockArrayInstanciated.filter(even));

// console.log(mockArrayInstanciated.map(addTwo));

// End of removable lines

export { even, MockArray };
