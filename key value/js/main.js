const messageDiv = document.getElementById("message");
let numberValue = document.getElementById('number-value');
let keyValue = document.getElementById('event-key-value');
let locationValue = document.getElementById('event-location-value');
let whichValue = document.getElementById('event-which-value');
let codeValue = document.getElementById('event-code-value');
let evetns = document.querySelector('.events')

document.addEventListener("keydown", function (event) {
    event.preventDefault();
    messageDiv.style.display = "none";
    numberValue.style.display = 'flex';
    evetns.style.display = 'flex';
    numberValue.textContent = event.which;
    keyValue.textContent = event.key;
    locationValue.textContent = event.location;
    whichValue.textContent = event.which;
    codeValue.textContent = event.code;
    console.log(event)
});