class MockArray {
  obj = {};

  get length() {
    return Object.keys(this.obj).length;
  }

  push(value) {
    const lengthArray = this.length;
    this.obj[`property${lengthArray}`] = value;
  }

  some() {}

  find() {}

  filter() {}

  map() {}
}

const mockArrayInstanciated = new MockArray();

/* console.log(mockArrayInstanciated); */

console.log(mockArrayInstanciated.length);

mockArrayInstanciated.push(23);
mockArrayInstanciated.push(23);
mockArrayInstanciated.push(23);
mockArrayInstanciated.push(23);

console.log(mockArrayInstanciated.length);
