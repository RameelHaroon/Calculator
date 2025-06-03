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

function operate(operand1, operand2, operator){
    if(operator === "+"){
        return add(operand1, operand2);
    }else if(operator === "-"){
        return subtract(operand1, operand2);
    }else if(operator === "*"){
        return multiply(operand1, operand2);
    }else if(operator === "/"){
        return divide(operand1, operand2);
    }

    return 0;
}