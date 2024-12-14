let h2Elem = document.getElementById('h2');
let PElem = document.getElementById('content')
function Convert() {
    let input = document.getElementById('text');
    let inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        alert('Please enter a valid number!');
        return;
    }
    PElem.style.display = 'block';

    if (h2Elem.textContent == 'Converter F to C') {
        let celsius = ((inputValue - 32) * 5) / 9;
        PElem.textContent = `${inputValue} ° F is equal to ${celsius.toFixed(2)} ° C`;
    } else {
        let fahrenheit = (inputValue * 9) / 5 + 32;
        PElem.textContent = `${inputValue} ° C is equal to ${fahrenheit.toFixed(2)} ° F`;
    }
}

function Reset() {
  let input = document.getElementById('text');
  input.value = '';
  if (PElem.style.display = 'block') {
  PElem.style.display = 'none';
  }
}
function Change() {
    let input = document.getElementById('text');

    if (h2Elem.textContent == 'Converter F to C') {
        document.title = 'Converter C to F';
        h2Elem.textContent = 'Converter C to F';
        input.placeholder = ' C';
    } else {
        document.title = 'Converter F to C';
        h2Elem.textContent = 'Converter F to C';
        input.placeholder = ' F';
    }
}