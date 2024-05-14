// Start coding here
let calculator = {};
calculator = {
  add: function add(a, b) {
    const result = a + b;
    return result;
  },

  subtract: function subtract(a, b) {
    const result = a - b;
    return result;
  },

  multiply: function multiply(a, b) {
    const result = a * b;
    return result;
  },

  divide: function divide(a, b) {
    const result = a / b;
    return result;
  },
};

let addResult = calculator.add(10, 20);
console.log(addResult);

let divideResult = calculator.divide(3000, 10);
console.log(divideResult);
