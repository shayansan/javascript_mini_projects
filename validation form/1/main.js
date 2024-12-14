let userNameInput = document.querySelector('.username');
let userPassInput = document.querySelector('.password');
let modal = document.querySelector('.modal');
function checkValid() {
let userNameValue = userNameInput.value;
    let userPassValue = userPassInput.value;
    if (userNameValue.length < 11 || userPassValue.length < 8) {
        modal.style.display = 'inline';
        modal.innerHTML = 'please enter true information'
        modal.style.background = 'red';
    }
    else {
        modal.style.display = 'inline';
        modal.innerHTML = 'wellcome'
        modal.style.background = 'green';
    }
    console.log(userNameValue, userPassValue);
            setTimeout(function () {
            modal.style.display = 'none';
        }, 4000);
}