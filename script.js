let currentValue = "";
let operator = "";
let previousValue = "";

function appendNumber(number) {
    currentValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentValue !== "") {
        operator = op;
        previousValue = currentValue;
        currentValue = "";
        updateDisplay();
    }
}

function clearDisplay() {
    currentValue = "";
    operator = "";
    previousValue = "";
    updateDisplay();
}

function calculate() {
    if (previousValue !== "" && currentValue !== "") {
        const num1 = parseFloat(previousValue);
        const num2 = parseFloat(currentValue);
        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
        currentValue = result.toString();
        operator = "";
        previousValue = "";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = currentValue;
}
