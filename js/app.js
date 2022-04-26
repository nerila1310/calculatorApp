import Display from './class/Display.js'

//* Selectors
const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');

const selectedTheme = document.getElementById('theme');

const buttonValues = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const ratioButtons = document.querySelectorAll('[name="toggle-state"]');

screen = new Display(displayPreviousValue, displayCurrentValue);

//* add events
buttonValues.forEach(button => {
    button.addEventListener('click', () => screen.addNumber(button.innerHTML))
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => screen.validate(operator.value))
})

ratioButtons.forEach(ratio => {
    ratio.addEventListener('change', () => {

        switch (ratio.value) {
            case 'theme1':
                selectedTheme.href = 'css/theme1.css';
                break;
            case 'theme2':
                selectedTheme.href = 'css/theme2.css'
                break;
            case 'theme3':
                selectedTheme.href = 'css/theme3.css'
                break;
            default:
                selectedTheme.href = 'css/theme1.css'
                break;
        }
    })
})