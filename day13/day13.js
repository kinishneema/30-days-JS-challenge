function add1(a, b) {
  return a + b;
}
module.exports = add1;

// person.js
// const person = {
//   name: "John Doe",
//   age: 30,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// module.exports = person;

// math.js
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
exports.add = add;
exports.subtract = subtract;

// multiply.js
function multiply(a, b) {
  return a * b;
}
module.exports = multiply;

// utils.js
const PI = 3.14;
const E = 2.71;
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
module.exports = {
  PI,
  E,
  add,
  subtract,
};
