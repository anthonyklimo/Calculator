let currentValue = "0"; // value either input by user or output by calculation
let previousValue = "";
let operatorType = "="; 
let isOperatorActive = false;

let displayBottom = document.getElementById("display-bottom");
let displayTop = document.getElementById("display-top");

// top and bottom displays equal
displayBottom.innerHTML = currentValue;
displayTop.innerHTML = "";

const numberButtons = document.querySelectorAll("[data-num]");
const operatorButtons = document.querySelectorAll(".operator");
const deleteButton = document.getElementById("delete");
const toggleNegative = document.getElementById("toggle-negative");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        
        clickNumber(button);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
    if(!isOperatorActive) { // prevents repeatedly clicking operator buttons
        clickOperator(button);
    }
    });
});

clear.addEventListener("click", function() {
    clickClear();
});

decimal.addEventListener("click", function() {
    clickDecimal();
});

toggleNegative.addEventListener("click", function() {
    clickToggleNegative();
});

equals.addEventListener("click", function() {
    if(operatorType == '=' || isOperatorActive) {
        return;
    } else {
        clickEquals();
    }
});

deleteButton.addEventListener("click", function() {   
    clickDelete();
});

function clickToggleNegative() {
    if(currentValue.charAt(0) == "-") {
        currentValue = currentValue.substring(1, currentValue.length);
    } else if(currentValue.charAt(0) == "0") {
        currentValue = "-";
    } else {
        currentValue = "-" + currentValue;
    }
    displayBottom.innerHTML = currentValue;
}
function clickDecimal() {
    if(!currentValue.includes(".")) {
        currentValue += ".";
        displayBottom.innerHTML = currentValue;
        displayTop.innerHTML += ".";
    }
}
function clickDelete() {
    currentValue = currentValue.substring(0, currentValue.length - 1);
    if(currentValue =="") {
        currentValue = "0";
    }
    displayBottom.innerHTML = currentValue;
}
function clickNumber(button) {
    if(currentValue == "0") {
        currentValue = "";
    }
    currentValue += button.dataset.num;
    displayBottom.innerHTML = currentValue;
    displayTop.innerHTML += button.dataset.num;
    isOperatorActive = false;
    console.log(currentValue);
}

function clickClear() {
    currentValue = "0";
    previousValue = "";
    displayBottom.innerHTML = currentValue;
    displayTop.innerHTML = "";
    isOperatorActive = false;
}
function clickOperator(button) {

    if(previousValue != "" && operatorType != "=") {
        let a = parseFloat(previousValue);
        let b = parseFloat(currentValue);
        currentValue = executeOperation(a, b).toFixed(8);
        currentValue = String(parseFloat(currentValue));
        displayBottom.innerHTML = currentValue;
        displayTop.innerHTML = `${currentValue} ${button.textContent} `;
        console.log(previousValue);
    }
    displayTop.innerHTML = "";
    displayTop.innerHTML = `${currentValue} ${button.textContent} `;
    operatorType = button.textContent;
    previousValue = currentValue;  
    currentValue = '0';
    isOperatorActive = true;
}

function clickEquals () {
    let a = parseFloat(previousValue);
    let b = parseFloat(currentValue);
    displayTop.innerHTML += ` = `;
    currentValue = executeOperation(a, b).toFixed(8); //allows up to 8 decimal places
    currentValue = String(parseFloat(currentValue)); //removes trailing zeroes
    displayBottom.innerHTML = currentValue;
    operatorType = '=';
}

//operator functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function executeOperation(a, b) {
    if(operatorType == '+') {
        return add(a, b);
    } else if (operatorType == '-') {
        return subtract(a, b);
    } else if (operatorType == 'x') {
        return multiply(a, b);
    } else if (operatorType == '÷'){
        return divide(a, b);
    }
    else {
        return;
    }
}