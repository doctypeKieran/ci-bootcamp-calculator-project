document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "x", "C", "0", "=", "/"];

    const calculatorButtons = document.getElementById('calculator-buttons');

    // Create calculator buttons
    buttons.forEach((button) => {
        const btnElement = document.createElement("button");
        btnElement.textContent = button;
        btnElement.classList.add("btn", button === "=" || button === "C" ? "btn-danger" : "btn-primary");
        btnElement.addEventListener("click", () => {
            handleButtonClick(button);
        });
        calculatorButtons.appendChild(btnElement);
    })

    // Initialise the calculation variables
    let operand1 = "";
    let operand2 = "";
    let operator = "";
    // Handle the button clicks
    function handleButtonClick(button) {
        // Code for handling button clicks
        if (button >= "0" && button <= "9") {
            operand2 += button;
            display.value = operand2;
        } else if (["+", "-", "x", "/"].includes(button)) {
            operator = button;
            operand1 = operand2;
            operand2 = "";
        } else if (button === "C") {
            operand1 = operand2 = operator = "";
            display.value = "";
        } else if (button === "=") {
            let result = 0;
            let sum = 0;
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            switch (operator) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "x":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    break;
                default:
                    result = 0;
            }
            display.value = result;
            operand1 = result;
            operand2 = operand1;
            console.log(`Value of operand1: ${operand1}`);
            console.log(`Value of operand2: ${operand2}`);
            console.log(`Value of sum: ${sum}`);
            console.log(`Value of result: ${result}`);
            console.log(`Type of result: ${typeof result}`);
            console.log(`Value of display.value: ${display.value}`);
            console.log(`Type of display.value: ${typeof display.value}`);
            console.log("-------------------------");
        }
    }
});