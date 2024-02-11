document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (button.classList.contains('number')) {
                currentInput += buttonText;
                display.textContent = currentInput;
            } else if (button.classList.contains('operators')) {
                if (currentInput !== '') {
                    currentInput += ' ' + buttonText + ' ';
                    display.textContent = currentInput;
                }
            } else if (button.classList.contains('equals')) {
                try {
                    currentInput = eval(currentInput);
                    display.textContent = currentInput;
                } catch (error) {
                    display.textContent = 'Error';
                    console.error(error);
                }
            } else if (button.classList.contains('clear')) {
                currentInput = '';
                display.textContent = '0';
            }
        });
    });
});
