class MockArray {
  obj = {};

  get length() {
    return Object.keys(this.obj).length;
  }

  push() {}

  some() {}

  find() {}

  filter() {}

  map() {}
}

const mockArrayInstanciated = new MockArray();

console.log(mockArrayInstanciated);

console.log(mockArrayInstanciated.length);
