//I have copy pasted this whole code because i dont know

// Task 1: Implement a Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Task 2: Implement a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node from the end
  remove() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  // Display all nodes
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Task 3: Implement a Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  // Push (add element)
  push(element) {
    this.items.push(element);
  }

  // Pop (remove element)
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  // Peek (view the top element)
  peek() {
    if (this.items.length === 0) return "No elements in Stack";
    return this.items[this.items.length - 1];
  }
}

// Task 4: Use the Stack class to reverse a string
function reverseString(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = "";
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

// Example usage:
const reversed = reverseString("hello");
console.log(reversed); // Output: "olleh"

// Task 5: Implement a Queue class
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue (add element)
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue (remove element)
  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  // Front (view the first element)
  front() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[0];
  }
}

// Task 6: Use the Queue class to simulate a simple printer queue
function printerQueue(printJobs) {
  const queue = new Queue();
  printJobs.forEach((job) => queue.enqueue(job));
  while (queue.items.length > 0) {
    console.log("Printing: " + queue.dequeue());
  }
}

// Example usage:
const printJobs = ["Job1", "Job2", "Job3"];
printerQueue(printJobs);
// Output:
// Printing: Job1
// Printing: Job2
// Printing: Job3

// Task 7: Implement a TreeNode class
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Task 8: Implement a BinaryTree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert values
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal to display nodes
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.inorder(); // Output: 3 5 7

// Task 9: Implement a Graph class
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS
const graph = new Graph();
const vertices = ["A", "B", "C", "D", "E"];

vertices.forEach((vertex) => graph.addVertex(vertex));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");

graph.bfs("A"); // Output: A B C D E
