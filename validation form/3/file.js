let userNameText = document.querySelector('.usernamespan');
let userPassText = document.querySelector('.passwordspan');
let userNameInput = document.querySelector('.username');
let userPassInput = document.querySelector('.password');

function userNameValidation() {
    if (userNameInput.value.length < 12) {
        userNameText.style.color = 'red';
        userNameText.innerHTML = 'it must contain at least 12 character';
        userNameText.style.display = 'block';
    }
    else {
        userNameText.style.color = 'green';
        userNameText.innerHTML = 'correct username';
        userNameText.style.display = 'block';
    }
}
function userPassValidation() {
        if (userPassInput.value.length < 8) {
        userPassText.style.color = 'red';
        userPassText.innerHTML = 'it must contain at least 8 character';
        userPassText.style.display = 'block';
    }
    else {
        userPassText.style.color = 'green';
        userPassText.innerHTML = 'correct password';
        userPassText.style.display = 'block';
    }
}