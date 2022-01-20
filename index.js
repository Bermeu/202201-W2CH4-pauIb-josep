class MockArray {
  obj = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  };

  get length() {
    return Object.keys(this.obj).length;
  }

  push() {}

  some(actingFunc) {
    let response = false;

    Object.keys(this.obj).forEach((key) => {
      if (actingFunc(this.obj[key])) {
        response = true;
      }
    });
    return response;
  }

  find() {}

  filter() {}

  map() {}
}
const even = (element) => element % 2 === 0;

const mockArrayInstanciated = new MockArray();

console.log(mockArrayInstanciated);

console.log(mockArrayInstanciated.length);

console.log(mockArrayInstanciated.some(even));
