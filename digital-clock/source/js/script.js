let clock = document.querySelector('.clock');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');

setInterval(function () {
    let currentTime = new Date();
    hour.textContent = currentTime.getHours();
    minute.textContent = currentTime.getMinutes();
    seconds.textContent = currentTime.getSeconds();
    if (hour.textContent < 10) {
        hour.textContent = "0" + hour.textContent;
        }
        else if (minute.textContent < 10) {
            minute.textContent = "0" + minute.textContent;
            }
            else if (seconds.textContent < 10) {
                seconds.textContent = "0" + seconds.textContent;
            }
}, 1000);