function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
console.log(factorial(6));

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// Test cases
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(0)); // Output: 0

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}
// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([])); // Output: 0

function maxElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const maxRest = maxElement(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
  }
}
// Test cases
console.log(maxElement([1, 2, 3, 4, 5])); // Output: 5
console.log(maxElement([5])); // Output: 5

function reverseString(s) {
  if (s.length === 0) {
    return s;
  } else {
    return s[s.length - 1] + reverseString(s.slice(0, -1));
  }
}
// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("")); // Output: ""

function isPalindrome(s) {
  if (s.length <= 1) {
    return true;
  } else {
    return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1));
  }
}
// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // Target not found
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}
// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  } else {
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
  }
}
// Test cases
console.log(countOccurrences([1, 2, 3, 2, 2, 4, 2], 2));
