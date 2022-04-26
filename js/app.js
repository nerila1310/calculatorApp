import Display from './class/Display.js'

const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');

const buttonValues = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

screen = new Display(displayPreviousValue,displayCurrentValue);

buttonValues.forEach(button => {
    button.addEventListener('click', () => screen.addNumber(button.innerHTML) )
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => screen.validate(operator.value))
})