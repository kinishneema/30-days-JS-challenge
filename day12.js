//task1
function throwError() {
  throw new Error("This is an intentional error");
}

try {
  throwError();
} catch (error) {
  console.log("Caught an error:", error.message);
}

//tas2
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // This will throw an error
} catch (error) {
  console.log("Error:", error.message);
}

//task3
function executeWithFinally() {
  try {
    console.log("In the try block");
    throw new Error("Error thrown in try block");
  } catch (error) {
    console.log("In the catch block:", error.message);
  } finally {
    console.log("In the finally block");
  }
}
executeWithFinally();

//task4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function throwCustomError() {
  throw new CustomError("This is a custom error");
}
try {
  throwCustomError();
} catch (error) {
  console.log("Caught a custom error:", error.message);
}

//task5
function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new CustomError("Invalid input: input cannot be empty");
  }
  return true;
}
try {
  validateInput(""); // This will throw an error
} catch (error) {
  console.log("Validation error:", error.message);
}

//task6
const randomPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});
randomPromise
  .then((message) => console.log(message))
  .catch((error) => console.log("Promise error:", error));

//task7
async function handleRandomPromise() {
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.log("Caught an error in async function:", error);
  }
}

handleRandomPromise();

//task8
fetch("https://invalidurl.example.com")
  .then((response) => response.json())
  .catch((error) => console.log("Fetch error:", error.message));

//task9
async function fetchData() {
  try {
    const response = await fetch("https://invalidurl.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

fetchData();
