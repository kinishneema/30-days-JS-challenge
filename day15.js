function outerFunction() {
    let outerVar = "I am from the outer scope";
    return function innerFunction() {
        console.log(outerVar);
    }
}
const inner = outerFunction();
inner(); 
// Output: I am from the outer scope


function createCounter() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    }
}
const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // Output: 1
counter.increment();
console.log(counter.getValue()); // Output: 2


function createIDGenerator() {
    let lastID = 0;
    return function() {
        lastID++;
        return lastID;
    }
}
const generateID = createIDGenerator();
console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2


function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    }
}
const greetJohn = createGreeter("John");
greetJohn(); // Output: Hello, John!
const greetJane = createGreeter("Jane");
greetJane(); // Output: Hello, Jane!


function createFunctionArray() {
    let functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            }
        })(i));
    }
    return functions;
}
const functionArray = createFunctionArray();
functionArray[0](); // Output: 0
functionArray[1](); // Output: 1
functionArray[2](); // Output: 2
functionArray[3](); // Output: 3
functionArray[4](); // Output: 4


const itemManager = (function() {
    let items = [];
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    }
})();
itemManager.addItem("item1");
itemManager.addItem("item2");
console.log(itemManager.listItems()); // Output: ["item1", "item2"]
itemManager.removeItem("item1");
console.log(itemManager.listItems()); // Output: ["item2"]


function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    }
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (from cache)


function memoizeFactorial() {
    const cache = {};
    function factorial(n) {
        if (n <= 1) return 1;
        if (!cache[n]) {
            cache[n] = n * factorial(n - 1);
        }
        return cache[n];
    }
    return factorial;
}
const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(6)); // Output: 720 (reuses factorial(5) from cache)
