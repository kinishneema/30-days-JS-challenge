// const add = require("./day13");
// console.log(add(2, 3));

// main.js
// const person = require("./day13");
// console.log(person.name); // Outputs: John Doe
// person.greet(); // Outputs: Hello, my name is John Doe

// main.js
// const { add, subtract } = require("./day13");
// console.log(add(5, 3)); // Outputs: 8
// console.log(subtract(5, 3)); // Outputs: 2

// main.js
// const multiply = require("./day13");
// console.log(multiply(4, 5)); // Outputs: 20

// main.js
const utils = require("./day13");
console.log(utils.PI); // Outputs: 3.14
console.log(utils.add(2, 3)); // Outputs: 5

// main.js
const _ = require("lodash");
const numbers = [1, 2, 3, 4, 5];
console.log(_.reverse(numbers)); // Outputs: [5, 4, 3, 2, 1]

// main.js
const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
