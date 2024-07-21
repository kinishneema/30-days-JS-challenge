
// Activity 1: Selecting and Manipulating Elements
document.getElementById('myElement').textContent = 'New text content (Task 1)';
document.querySelector('.myClass').style.backgroundColor = 'blue';

// Activity 2: Creating and Appending Elements

let newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element (Task 3)';
document.body.appendChild(newDiv);


let newLi = document.createElement('li');
newLi.textContent = 'New list item (Task 4)';
document.getElementById('myList').appendChild(newLi);

//  Activity 3: Removing Elements
let elementToRemove = document.getElementById('removeElement');
elementToRemove.parentNode.removeChild(elementToRemove);

let parentElement = document.getElementById('parentElement');
parentElement.removeChild(parentElement.lastChild);

//  Activity 4: Modifying Attributes and Classes
document.getElementById('myImage').setAttribute('src', 'newImageSource.jpg');

let element = document.getElementById('myElement2');
element.classList.add('newClass');  // Add a class
element.classList.remove('oldClass');  // Remove a class

//  Activity 5: Event Handling
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myParagraph').textContent = 'Text has been changed';
});

document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
});