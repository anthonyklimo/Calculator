let currentValue = "0"; // value either input by user or output by calculation
let previousValue = "0";
let topExpression = "";
let operatorType = '=';
let isOperatorActive = false;



let displayBottom = document.getElementById("display-bottom");
let displayTop = document.getElementById("display-top");

// top and bottom displays equal
displayBottom.innerHTML = currentValue;
displayTop.innerHTML = topExpression;

const numberButtons = document.querySelectorAll("[data-num]");
const operatorButtons = document.querySelectorAll(".operator");
const deleteButton = document.getElementById("delete");
const toggleNegative = document.getElementById("toggle-negative");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");


numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        if(currentValue == "0") {
            currentValue = "";
        }
        currentValue += button.dataset.num;
        displayBottom.innerHTML = currentValue;
        isOperatorActive = false;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
    if(!isOperatorActive) {
        clickOperator(button);
    }
    });
});

clear.addEventListener("click", function() {
    currentValue = "0";
    topExpression = "";
    displayBottom.innerHTML = currentValue;
    displayTop.innerHTML = topExpression;
    isOperatorActive = false;

});

decimal.addEventListener("click", function() {
    if(!currentValue.includes(".")) {
        currentValue += ".";
        displayBottom.innerHTML = currentValue;
    }
});

toggleNegative.addEventListener("click", function() {
    if(currentValue.charAt(0) == "-") {
        currentValue = currentValue.substring(1, currentValue.length);
    } else if(currentValue.charAt(0) == "0") {
        currentValue = "-";
    } else {
        currentValue = "-" + currentValue;
    }
    displayBottom.innerHTML = currentValue;
});

equals.addEventListener("click", function() {
    if(operatorType == '=' || isOperatorActive) {
        return;
    } else {
        clickEquals();
    }
});

deleteButton.addEventListener("click", function() {   
    currentValue = currentValue.substring(0, currentValue.length - 1);
    if(currentValue =="") {
        currentValue = "0";
    }
    displayBottom.innerHTML = currentValue;
});

function clickOperator(button) {
    topExpression = `${currentValue} ${button.textContent} `;
    displayTop.innerHTML = topExpression;
    operatorType = button.textContent;
    previousValue = currentValue;
    currentValue = '0';
    isOperatorActive = true;
}

function clickEquals () {
    let a = parseFloat(previousValue);
    let b = parseFloat(currentValue);
    topExpression += `${currentValue} = `;
    displayTop.innerHTML = topExpression;
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

