let toDoInput = document.getElementById('itemInput');
let toDoSubmit = document.getElementById('addButton');
let toDoList = document.getElementById('todoList');
let clearButton = document.getElementById('clearButton'); // delete btn

// When the page loads, check if there are any saved items in LocalStorage
document.addEventListener("DOMContentLoaded", function() {
    let storedData = localStorage.getItem('toDoInfo');
    if (storedData) {
        let todos = JSON.parse(storedData); // Parse the saved data (if any)
        todos.forEach(function(todo) {
            addToDoItem(todo.name, todo.completed);
        });
    }
});

// Function to add a new ToDo item to the list
function addToDoItem(name, completed) {
    let newToDo = document.createElement('li');
    newToDo.classList.add('well');
    
    // Create div for the contents of the todo
    let liContents = document.createElement('div');
    liContents.classList.add('li-contents');
    
    // Create label for the todo item
    let label = document.createElement('label');
    label.textContent = name;
    if (completed) {
        label.style.textDecoration = 'line-through'; // Mark as completed
    }
    
    // Create buttons for each todo item
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('btn', 'btn-success');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger');
    
    // Add buttons to the buttons div
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    
    // Add label and buttons to the liContents div
    liContents.appendChild(label);
    liContents.appendChild(buttonsDiv);
    
    // Add liContents div to the todo list item (li)
    newToDo.appendChild(liContents);
    
    // Append the new todo item to the todo list (ul)
    toDoList.appendChild(newToDo);

    // Add event listener to mark as completed
    completeBtn.addEventListener('click', function() {
        label.style.textDecoration = 'line-through';
        updateToDoInLocalStorage(name, true);
    });

    // Add event listener to delete the item
    deleteBtn.addEventListener('click', function() {
        newToDo.remove();
        deleteToDoFromLocalStorage(name);
    });
}

// Add a new item to the list and store it in LocalStorage
toDoSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    
    let toDoItem = toDoInput.value;
    if (toDoItem.trim() === "") return; // Prevent adding empty items
    
    // Create new todo object
    let newToDo = { name: toDoItem, completed: false };

    // Get current todos from LocalStorage
    let todos = JSON.parse(localStorage.getItem('toDoInfo')) || [];
    
    // Add the new todo item to the array
    todos.push(newToDo);
    
    // Save the updated array back to LocalStorage
    localStorage.setItem('toDoInfo', JSON.stringify(todos));
    
    // Add the new todo item to the page
    addToDoItem(newToDo.name, newToDo.completed);
    
    // Clear input field
    toDoInput.value = '';
});

// clear item from field
clearButton.addEventListener('click', function() {
    toDoList.innerHTML = '';
    localStorage.removeItem('toDoInfo');
});

// Function to update a todo item in LocalStorage when marked as completed
function updateToDoInLocalStorage(name, completed) {
    let todos = JSON.parse(localStorage.getItem('toDoInfo')) || [];
    todos.forEach(function(todo) {
        if (todo.name === name) {
            todo.completed = completed; // Update the status to completed
        }
    });
    localStorage.setItem('toDoInfo', JSON.stringify(todos));
}

// Function to remove a todo item from LocalStorage
function deleteToDoFromLocalStorage(name) {
    let todos = JSON.parse(localStorage.getItem('toDoInfo')) || [];
    todos = todos.filter(function(todo) {
        return todo.name !== name; // Remove the todo item
    });
    localStorage.setItem('toDoInfo', JSON.stringify(todos));
}