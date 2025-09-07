const display = document.querySelector('#display');
const buttons = document.querySelectorAll('form button');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const value = button.textContent;

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erro';
            }
        } else {
            display.value += value;
        }
    });
});

