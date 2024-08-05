let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) calculate();
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    if (currentOperation === null || displayValue === '') return;
    secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = firstOperand + secondOperand;
            break;
        case '-':
            displayValue = firstOperand - secondOperand;
            break;
        case '*':
            displayValue = firstOperand * secondOperand;
            break;
        case '/':
            displayValue = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    firstOperand = null;
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
