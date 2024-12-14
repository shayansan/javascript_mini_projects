let ulItem = document.querySelector('.list');
let inputToDO = document.getElementById('todo');
let notification = document.querySelector('.notification');

// Delete item from the list
ulItem.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon')) {
        let mainLi = event.target.parentElement;
        let itemText = mainLi.textContent.trim();
        mainLi.remove();

        // show notification
    notification.style.visibility = 'visible';
    notification.style.backgroundColor = '#d56128';
        notification.textContent = `"${itemText}" deleted`;
        // deleting notification after 3 seconds
    setTimeout(function () {
    notification.style.visibility = 'hidden';
    }, 3500);
    }
});

// Adding new item to list
inputToDO.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && inputToDO.value.trim() !== '') {
        let newLiItem = document.createElement('li');
        newLiItem.className = 'li-items';
        newLiItem.textContent = inputToDO.value.trim();

        let newIconItem = document.createElement('i');
        newIconItem.className = 'fa-solid fa-trash icon';

        newLiItem.append(newIconItem);
        ulItem.append(newLiItem);

        // Delete value from input
        inputToDO.value = '';

        // Show notification
        showNotification(`"${newLiItem.textContent}" added`);
    }
});

// Show notification message
function showNotification(message) {
    notification.style.visibility = 'visible';
    notification.style.backgroundColor = 'green';
    notification.textContent = message;

    // deleting notification after 3 seconds
    setTimeout(function () {
        notification.style.visibility = 'hidden';
    }, 3500);
}