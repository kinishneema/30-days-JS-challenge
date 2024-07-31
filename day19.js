//task1
const str1 =
  "JavaScript is a versatile language. JavaScript can be used for both front-end and back-end development.";
const regex1 = /JavaScript/g;
const matches1 = str1.match(regex1);
console.log(matches1); // Logs all occurrences of "JavaScript"

//task2
const str2 = "There are 123 apples and 456 oranges.";
const regex2 = /d+/g;
const matches2 = str2.match(regex2);
console.log(matches2); // Logs all sequences of digits

//task3
const str3 = "The Quick Brown Fox Jumps Over The Lazy Dog.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = str3.match(regex3);
console.log(matches3); // Logs all words that start with a capital letter

//task4
const str4 = "My phone number is 1234567890 and my zip code is 98765.";
const regex4 = /\d+/g; // Regular expression to match all sequences of one or more digits
const matches4 = str4.match(regex4);
console.log(matches4); // Logs all sequences of one or more digits

//task5
const str5 = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = str5.match(regex5);
console.log(matches5); // Logs the area code, central office code, and line number

//task6
const str6 = "user@example.com";
const regex6 = /(\w+)@(\w+\.\w+)/;
const matches6 = str6.match(regex6);
console.log(matches6); // Logs the username and domain

//task7
const str7 = "Hello world, hello JavaScript.";
const regex7 = /^Hello\b/;
const matches7 = str7.match(regex7);
console.log(matches7); // Logs "Hello" only if it's at the beginning of the string

//task8
const str8 = "This is a test. Just a test.";
const regex8 = /test\.$/;
const matches8 = str8.match(regex8);
console.log(matches8); // Logs "test." only if it's at the end of the string

//task9
const password = "P@ssw0rd";
const regex9 =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidPassword = regex9.test(password);
console.log(isValidPassword); // Logs whether the password is valid

//task10
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?(www\.)?([\w-]+)\.([a-z]{2,})(\/\S*)?$/;
const isValidURL = regex10.test(url);
console.log(isValidURL); // Logs whether the URL is valid
