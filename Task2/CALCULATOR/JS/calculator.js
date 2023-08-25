const display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let prevValue = null;

function updateDisplay() {
    display.textContent = currentInput || '0';
}

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            if (prevValue !== null) {
                calculate();
            }
            currentOperator = button.textContent;
            prevValue = parseFloat(currentInput);
            currentInput = '';
        }
    });
});

document.querySelector('.equal').addEventListener('click', () => {
    if (currentInput !== '' && prevValue !== null) {
        calculate();
        currentOperator = '';
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    currentInput = '';
    currentOperator = '';
    prevValue = null;
    updateDisplay();
});

document.querySelector('.decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
});

function calculate() {
    const currentValue = parseFloat(currentInput);
    switch (currentOperator) {
        case '+':
            currentInput = (prevValue + currentValue).toString();
            break;
        case '-':
            currentInput = (prevValue - currentValue).toString();
            break;
        case '*':
            currentInput = (prevValue * currentValue).toString();
            break;
        case '/':
            currentInput = (prevValue / currentValue).toString();
            break;
        case '%':
            currentInput = (prevValue % currentValue).toString();
            break;
    }
    prevValue = null;
    updateDisplay();
}

updateDisplay();
