class MockArray {
  obj = {
    a: 0,
    b: 1,
    c: 1,
    d: 2,
  };

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

  filter() {}

  map() {}
}
const even = (element) => element % 2 === 0;

const mockArrayInstanciated = new MockArray();

console.log(mockArrayInstanciated.length);

console.log(mockArrayInstanciated.some(even));

console.log(mockArrayInstanciated.find(even));
