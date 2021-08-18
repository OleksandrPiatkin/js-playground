const multiplyNumeric = (obj, num = 1) => {
  const result = {...obj};
  
  for(let key in result) {
    result[key] = typeof result[key] === 'number' ? result[key] * num : result[key];
  }

  return result;
};

const calculator = {
  value1: null,
  value2: null,

  read() {
    this.value1 = prompt('give the 1st value');
    this.value2 = prompt('give the 2d value');
  },

  sum() {
    return +this.value1 + +this.value2;
  },

  mul() {
    return this.value1 * this.value2;
  }
};

export { multiplyNumeric, calculator }; 