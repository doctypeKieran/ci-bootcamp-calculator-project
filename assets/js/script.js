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
            handleButtonClick(button)
        })
        calculatorButtons.appendChild(btnElement);
    })

    // Initialise the calculation variables
    // Handle the button clicks
});