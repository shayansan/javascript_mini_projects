    let input = document.getElementById('input');
    let button = document.getElementById('btn');
    let removeBtn = document.getElementById('remove-btn');
    let content = document.querySelector('.content');
    let colorButtons = document.querySelectorAll('.colors button');

    // Function to create a span for a new note
    function createSpan() {
        if (input.value.trim() !== '') {
            let span = document.createElement('span');
            span.classList.add('my-span');
            span.textContent = input.value;
            content.appendChild(span);
            input.value = ''; // Clear the input field after adding the note

            // Add click event to remove the note on click
            span.addEventListener('click', function () {
                span.remove();
            });
        }
    }

    // Add notes with the Enter key
    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            if (input.value) {
                createSpan();
            }
        }
    });

    // Add notes with the Add button
    button.addEventListener('click', createSpan);

    // Clear input field with the Clear Input button
    removeBtn.addEventListener('click', function () {
        input.value = '';
        input.style.backgroundColor = "#fff";
    });

    // Change background color of input and content when a color button is clicked
let selectedColor = "#e3e3e3";

colorButtons.forEach(button => {
    button.addEventListener('click', function () {
        selectedColor = window.getComputedStyle(button).backgroundColor; 
        input.style.backgroundColor = selectedColor; 
    });
});

function createSpan() {
    if (input.value.trim() !== '') {
        let span = document.createElement('span');
        span.classList.add('my-span');
        span.textContent = input.value;
        span.style.backgroundColor = selectedColor;
        content.appendChild(span);
        input.value = '';

        span.addEventListener('click', function () {
            span.remove();
        });
    }
}
