const name = "John";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

const multiLineString = `This is a multi-line string.
It uses template literals.
Each line is on a new line.`;
console.log(multiLineString);

const numbers = [10, 20, 30, 40, 50];
const [first, second] = numbers;
console.log(first, second); // Outputs: 10 20

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);


const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log(newArray); // Outputs: [1, 2, 3, 4, 5, 6]


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10


function product(a,b=12){
    return a*b
}
console.log(product(2))
console.log(product(5,2))


const propName = "color";
const myObject = {
    name: "Car",
    [propName]: "Red",
    start() {
        console.log("Car started");
    }
};
console.log(myObject);
myObject.start();



