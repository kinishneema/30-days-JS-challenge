//task1
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}
const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sorted Array:", bubbleSort(array1));

//task2
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap
  }
  return arr;
}
const array2 = [64, 25, 12, 22, 11];
console.log("Selection Sorted Array:", selectionSort(array2));

//task3
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((x) => x < pivot);
  let right = arr.filter((x) => x > pivot);
  let middle = arr.filter((x) => x === pivot);
  return [...quicksort(left), ...middle, ...quicksort(right)];
}
const array3 = [10, 7, 8, 9, 1, 5];
console.log("Quicksort Sorted Array:", quicksort(array3));

//task4
function linear_search(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return i;
    }
  }
  return -1;
}
let number = 4;
let arr = [1, 3, 4, 5, 2];
const result = linear_search(arr, number);
if (result != -1) {
  console.log(`element is present at ${result}`);
} else {
  console.log("element is not present");
}

//task5
function binary_search(arr, number) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == number) {
      return 1;
    } else if (arr[mid] > number) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}
let arr2 = [3, 4, 5, 6, 7, 8];
let number2 = 7;
const result2 = binary_search(arr2, number);
if (result != 1) {
  console.log("element not found");
} else {
  console.log(`element found at`);
}

//task6
function countCharacterOccurrences(str) {
  const counts = {};
  for (const char of str) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }
  return counts;
}
const string1 = "hello world";
console.log("Character Counts:", countCharacterOccurrences(string1));

//task7
function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  const seen = new Map();

  for (let end = 0; end < str.length; end++) {
    if (seen.has(str[end])) {
      start = Math.max(seen.get(str[end]) + 1, start);
    }
    seen.set(str[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
const string2 = "abcabcbb";
console.log(
  "Longest Substring Length:",
  longestSubstringWithoutRepeating(string2)
);

//task8
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
const array6 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log("Rotated Array:", rotateArray(array6, k));

//task9
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const array7 = [1, 3, 5, 7];
const array8 = [2, 4, 6, 8];
console.log("Merged Sorted Array:", mergeSortedArrays(array7, array8));
