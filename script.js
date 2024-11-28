let display = document.getElementById('display');

function addNumber(num) {
    display.value += num.toString();
}

function addOperator(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
