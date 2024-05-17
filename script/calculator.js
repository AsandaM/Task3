let input = document.querySelector('[type="text"]')
// let clear = document.querySelector()

let buttons = document.querySelectorAll('button')
let clear = document.querySelectorAll('#backspace')

let currentOperation = '';
let firstOperand = null;

// Loop through each button 
for (let button of buttons) {
    button.addEventListener('click', () => {
        let buttonText = button.innerText;

        if (!isNaN(buttonText)) { // If the button is a number
            input.value += buttonText;
        } else if (buttonText === '+') { // If the button is '+'
            firstOperand = parseFloat(input.value);
            currentOperation = buttonText;
            input.value = ''; // Clear the input for the next operand
        } else if (buttonText === '-') { // If the button is '-'
            firstOperand = parseFloat(input.value);
            currentOperation = buttonText;
            input.value = ''; // Clear the input for the next operand
        } else if (buttonText === 'x') { // If the button is 'x'
            firstOperand = parseFloat(input.value);
            currentOperation = '*'; // Set operation to multiplication
            input.value = ''; // Clear the input for the next operand
        } else if (buttonText === '÷') { // If the button is '÷'
            firstOperand = parseFloat(input.value);
            currentOperation = '/'; // Set operation to division
            input.value = ''; // Clear the input for the next operand
        } else if (buttonText === '1/x') { // If the button is '1/x'
            firstOperand = parseFloat(input.value);
            currentOperation = buttonText; // Set operation to division
            input.value = ''; // Clear the input for the next operand
        } else if (buttonText === '=') { // If the button is '='
            if (currentOperation === '+') {
                input.value = firstOperand + parseFloat(input.value);
            } else if (currentOperation === '-') {
                input.value = firstOperand - parseFloat(input.value);
            } else if (currentOperation === '*') { // Check for multiplication operation
                input.value = firstOperand * parseFloat(input.value);
            }
             else if (currentOperation === '/') { // Check for division operation
                input.value = firstOperand / parseFloat(input.value);
            }
             else if (currentOperation === '1/x') { // Check for division operation
                input.value = 1 / parseFloat(input.value)
            }
            currentOperation = '';
        } else if (buttonText === 'C') { // If the button is 'C'
            input.value = '';
            currentOperation = '';
            firstOperand = null;
        }
         else if (buttonText === 'CE') { // If the button is 'C'
            input.value = '';
            currentOperation = '';
            firstOperand = null;
        }
        else if(button.id == 'backspace'){
            input.value = input.value.slice(0, -1); 
        }
    });
}


