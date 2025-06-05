const numberKeyNode = document.querySelectorAll(".key-number");
const operatorKeyNode = document.querySelectorAll(".key-operator");
let leftOperand, rightOperand, operator, result

// Display related stuff
const display = document.querySelector(".display");

function sendToDisplay(displayText){
    display.textContent = displayText;
}

function clearDisplay() {
    display.textContent = "";
}

function resetValues() {
    leftOperand = undefined;
    rightOperand = undefined;
    operator = undefined;
    result = undefined;
}


Array.from(numberKeyNode).forEach((button) => {
    button.addEventListener("click", () => {
        clearDisplay();
        sendToDisplay(button.textContent);
    });
});

Array.from(operatorKeyNode).forEach((button) => {
    button.addEventListener("click", () => {
        // For case <operand> <operator> eg: 1 +
        if (
            leftOperand === undefined 
            && operator === undefined
            && display.textContent !== ""
        ) {
            log("<operand> <operator> eg: 1 +")
            leftOperand = parseInt(display.textContent);
            operator = button.textContent;
            clearDisplay();
        }
    });
});

// logging function
function log(message) {
    console.log(message);
} 

// Reset
const clearBtn = document.querySelector(".key-clear");
clearBtn.addEventListener("click", () =>  {
    clearDisplay();
    resetValues();
});


const equalsToKey = document.querySelector(".key-equal");
equalsToKey.addEventListener("click", () => {
    if (
        leftOperand != undefined
        && operator != undefined
        && display.textContent !== ""
    ) {
        result = getResult();
        clearDisplay();
        // convert number to string to check if the result overflows display
        sendToDisplay(String(result));
        // console logging
        log(`${leftOperand} ${operator} ${rightOperand} = ${result}`);
        resetValues();
    }
});

function getResult() {
    rightOperand = parseInt(display.textContent);
    return operate(operator, leftOperand, rightOperand);
}


function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function subtract(a, b){
    return a > b ? a - b : b - a;
}

function divide(a, b){
    return b === 0 ? 0 : a / b;
}

function operate(operator, leftOperand, rightOperand){
    if(operator === "+"){
        return add(leftOperand, rightOperand);
    }else if(operator === "-"){
        return subtract(leftOperand, rightOperand);
    }else if(operator === "*"){
        return multiply(leftOperand, rightOperand);
    }else if(operator === "/"){
        return divide(leftOperand, rightOperand);
    }

    return 0;
}