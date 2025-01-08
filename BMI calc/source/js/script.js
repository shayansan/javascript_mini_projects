let $ = document;
let weightInput = $.getElementById('weight');
let heightInput = $.getElementById('height');
let weightVal = $.getElementById('weight-val');
let heightVal = $.getElementById('height-val');
let bmiResult = $.getElementById('result');
let bmiCategory = $.getElementById('category');

function bmiCalculator(){
    let weight = weightInput.value;
    let height = heightInput.value;
    weightVal.innerHTML = `${weight} kg`;
    heightVal.innerHTML = `${height} cm`;
    let bmi = (weight / (Math.pow(height / 100, 2))).toFixed(1);
    bmiResult.innerHTML = bmi;

    if(bmi < 18.5){
        bmiResult.style.color = 'orange';
        bmiCategory.innerHTML = 'Underweight';
        } else if(bmi >= 18.5 && bmi < 25){
        bmiResult.style.color = '#0f0';
        bmiCategory.innerHTML = 'Normal weight';
        }
        else if(bmi >= 25 && bmi < 30){
        bmiResult.style.color = '#ff0';
        bmiCategory.innerHTML = 'Overweight';
        }
        else if(bmi >= 30){
        bmiResult.style.color = '#f00';
        bmiCategory.innerHTML = 'Obesity';
        }
}
weightInput.addEventListener('input', bmiCalculator );
heightInput.addEventListener('input', bmiCalculator );