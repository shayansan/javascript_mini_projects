let modalElem = document.querySelector('.modal');
let addToDo = document.getElementById('add_btn');
let overlay = document.getElementById('overlay');
let closeModal = document.querySelector('.btn');
let inputElem = document.getElementById('todo_input');
let inputSubmitElem = document.getElementById('todo_submit');
let noStatusElem = document.getElementById('no_status');
let counter = 0;

// Show modal after click
addToDo.addEventListener('click', function () {
    modalElem.classList.add('active');
    overlay.classList.add('active');
});

// Close modal after click on the icon
closeModal.addEventListener('click', function () {
    modalElem.classList.remove('active');
    overlay.classList.remove('active');
});

// Add note to the list
inputSubmitElem.addEventListener('click', function () {
    let note = inputElem.value.trim();

    if (note) { 
        // Making new to-do
        let newDivElem = document.createElement('div');
        newDivElem.classList.add('todo');
        newDivElem.setAttribute("draggable", "true");

        // Adding text to to-do
        newDivElem.innerText = note;

        // Making close icon
        let closeIcon = document.createElement("span");
        closeIcon.classList.add("close");
        closeIcon.innerHTML = "&times;";

        // Adding remove ability to close icon
        closeIcon.addEventListener("click", function () {
            this.parentElement.remove();
        });

        // Adding close icon to to-do
        newDivElem.appendChild(closeIcon);

        // Adding new div to "No Status"
        noStatusElem.appendChild(newDivElem);

        // Dragging functionality
        newDivElem.id = `todo-${counter}`;
        counter++;
        newDivElem.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('elemId', event.target.id);
        });

        // Deleting input value and closing the modal 
        inputElem.value = '';
        modalElem.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// Dragging and Dropping to other portions
let statuses = document.querySelectorAll('.status');

statuses.forEach(status => {
    status.addEventListener('dragover', function (event) {
        event.preventDefault(); 
    });

    status.addEventListener('drop', function (event) {
        let elemId = event.dataTransfer.getData('elemId'); 
        let draggedElem = document.getElementById(elemId);
        this.appendChild(draggedElem);
    });
});
