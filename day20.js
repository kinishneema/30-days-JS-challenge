// Task 1: Save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("myString", "Hello, World!");
let myString = localStorage.getItem("myString");
console.log(myString); // Output: Hello, World!

// Task 2: Save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let myObject = { name: "Alice", age: 25 };
localStorage.setItem("myObject", JSON.stringify(myObject));
let retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(retrievedObject); // Output: { name: 'Alice', age: 25 }

// <!-- Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load. -->
// <!DOCTYPE html>
// <html>
// <head>
//     <title>LocalStorage Form</title>
// </head>
// <body>
//     <form id="userForm">
//         Name: <input type="text" id="name" required><br>
//         Email: <input type="email" id="email" required><br>
//         <button type="submit">Save</button>
//     </form>

//     <div id="output"></div>

//     <script>
//         document.getElementById('userForm').addEventListener('submit', function(event) {
//             event.preventDefault();
//             let name = document.getElementById('name').value;
//             let email = document.getElementById('email').value;
//             localStorage.setItem('userName', name);
//             localStorage.setItem('userEmail', email);
//             displayUserData();
//         });

//         function displayUserData() {
//             let name = localStorage.getItem('userName');
//             let email = localStorage.getItem('userEmail');
//             document.getElementById('output').innerText = `Name: ${name}, Email: ${email}`;
//         }

//         // Display the saved data on page load
//         window.onload = displayUserData;
//     </script>
// </body>
// </html>

// Task 4: Remove an item from localStorage. Log the localStorage content before and after removal.
console.log(localStorage); // Log before removal
localStorage.removeItem("myString");
console.log(localStorage); // Log after removal

// Task 5: Save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("myString", "Hello, Session!");
let sessionString = sessionStorage.getItem("myString");
console.log(sessionString); // Output: Hello, Session!

// Task 6: Save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let sessionObject = { name: "Bob", age: 30 };
sessionStorage.setItem("sessionObject", JSON.stringify(sessionObject));
let retrievedSessionObject = JSON.parse(
  sessionStorage.getItem("sessionObject")
);
console.log(retrievedSessionObject); // Output: { name: 'Bob', age: 30 }

// <!-- Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load. -->
// <!DOCTYPE html>
// <html>
// <head>
//     <title>SessionStorage Form</title>
// </head>
// <body>
//     <form id="sessionForm">
//         Name: <input type="text" id="sessionName" required><br>
//         Email: <input type="email" id="sessionEmail" required><br>
//         <button type="submit">Save</button>
//     </form>

//     <div id="sessionOutput"></div>

//     <script>
//         document.getElementById('sessionForm').addEventListener('submit', function(event) {
//             event.preventDefault();
//             let name = document.getElementById('sessionName').value;
//             let email = document.getElementById('sessionEmail').value;
//             sessionStorage.setItem('sessionUserName', name);
//             sessionStorage.setItem('sessionUserEmail', email);
//             displaySessionUserData();
//         });

//         function displaySessionUserData() {
//             let name = sessionStorage.getItem('sessionUserName');
//             let email = sessionStorage.getItem('sessionUserEmail');
//             document.getElementById('sessionOutput').innerText = `Name: ${name}, Email: ${email}`;
//         }

//         // Display the saved data on page load
//         window.onload = displaySessionUserData;
//     </script>
// </body>
// </html>

// Task 8: Remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage); // Log before removal
sessionStorage.removeItem("myString");
console.log(sessionStorage); // Log after removal

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}

saveToBothStorages("sharedKey", "Shared Value");
console.log(localStorage.getItem("sharedKey")); // Output: Shared Value
console.log(sessionStorage.getItem("sharedKey")); // Output: Shared Value

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAllStorages() {
  localStorage.clear();
  sessionStorage.clear();
}
clearAllStorages();
console.log(localStorage.length); // Output: 0
console.log(sessionStorage.length);
