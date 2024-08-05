//I have not done all alone.this are done with the help of internet

function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let n = mergedArray.length;
    if (n % 2 === 0) {
        return (mergedArray[Math.floor((n - 1) / 2)] + mergedArray[Math.floor((n - 1) / 2 + 1)]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([], [1])); // 1.0
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.0
console.log(findMedianSortedArrays([2], [])); // 2.0


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return merge(lists, 0, lists.length - 1);
}

function merge(lists, left, right) {
    if (left === right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    let l1 = merge(lists, left, mid);
    let l2 = merge(lists, mid + 1, right);
    return mergeTwoLists(l1, l2);
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 === null ? l2 : l1;
    return dummy.next;
}

// Helper function to create linked lists from arrays
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Test cases
let lists = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];
let mergedList = mergeKLists(lists);

let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
// Output: 1 1 2 3 4 4 5 6



function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return trappedWater;
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9
console.log(trap([])); // 0
console.log(trap([1, 0, 1])); // 1
console.log(trap([2, 1, 0, 1, 2])); // 5


function solveNQueens(n) {
    let res = [];
    let board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    backtrack(board, 0, res);
    return res.map(b => b.map(row => row.join('')));
}

function backtrack(board, row, res) {
    if (row === board.length) {
        res.push(board.map(r => r.slice()));
        return;
    }
    for (let col = 0; col < board.length; col++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            backtrack(board, row + 1, res);
            board[row][col] = '.';
        }
    }
}

function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }
    return true;
}

// Test cases
console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // [["Q"]]


function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    while (queue.length > 0) {
        let [currentWord, length] = queue.shift();
        if (currentWord === endWord) return length;

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // ASCII 'a' to 'z'
                let newWord = currentWord.substring(0, i) + String.fromCharCode(c) + currentWord.substring(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // 2
