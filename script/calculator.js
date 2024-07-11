let input = document.querySelector('[type="text"]');
let buttons = document.querySelectorAll('button');
let currentOperation = '';
let firstOperand = null;

// Loop through each button 
for (let button of buttons) {
    button.addEventListener('click', () => {
        let buttonText = button.innerText;

        if (!isNaN(buttonText) || buttonText === ',') { // If the button is a number or comma
            input.value += buttonText === ',' ? '.' : buttonText;
        } else if (buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '÷') { // If the button is an operator
            input.value += ` ${buttonText} `;
        } else if (buttonText === '=') { // If the button is '='
            let expression = input.value.replace(/x/g, '*').replace(/÷/g, '/');
            input.value += ` = ${eval(expression)}`;
        } else if (buttonText === '%') { // If the button is '%'
            let expression = input.value.replace(/x/g, '*').replace(/÷/g, '/');
            let lastNumber = parseFloat(input.value.split(' ').pop());
            input.value = input.value.slice(0, -input.value.split(' ').pop().length) + (lastNumber / 100);
        } else if (buttonText === '√') { // If the button is '√'
            input.value = `√(${input.value}) = ${Math.sqrt(parseFloat(input.value))}`;
        } else if (buttonText === '1/x') { // If the button is '1/x'
            input.value = `1/(${input.value}) = ${1 / parseFloat(input.value)}`;
        } else if (buttonText === 'C' || buttonText === 'CE') { // If the button is 'C' or 'CE'
            input.value = '';
        } else if (buttonText === '+/-') { // If the button is '+/-'
            input.value = input.value.includes('-') ? input.value.replace('-', '') : `-${input.value}`;
        }
    });
}

// Backspace button functionality
document.querySelector('#backspace').addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});

// Square button functionality
document.querySelector('#power').addEventListener('click', () => {
    input.value = `(${input.value})^2 = ${Math.pow(parseFloat(input.value), 2)}`;
});
