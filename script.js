let currentValue = "0"; // value either input by user or output by calculation
let previousValue = "0";
let topExpression = "";
let operatorType = '';
// let isOperatorActive = false;

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
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        topExpression += `${currentValue} ${button.textContent} `;
        displayTop.innerHTML = topExpression;
            operatorType = button.textContent;
        console.log(operatorType);
        // if(isOperatorActive == false) {
        //     isOperatorActive = true;
        // }
    previousValue = currentValue;
    currentValue = '0';
    })
})

clear.addEventListener("click", function() {
    currentValue = "0";
    topExpression = "";
    displayBottom.innerHTML = currentValue;
    displayTop.innerHTML = topExpression;
    // isOperatorActive = false;
});

decimal.addEventListener("click", function() {
    if(!currentValue.includes(".")) {
        currentValue += ".";
        displayBottom.innerHTML = currentValue;
    }
})

toggleNegative.addEventListener("click", function() {
    if(currentValue.charAt(0) == "-") {
        currentValue = currentValue.substring(1, currentValue.length);
    } else {
        currentValue = "-" + currentValue;
    }
    displayBottom.innerHTML = currentValue;
})

equals.addEventListener("click", function() {
    if(operatorType == '=') {
        return;
    } else {
        operateEquals();
    }
});

deleteButton.addEventListener("click", function() {   
    currentValue = currentValue.substring(0, currentValue.length - 1);
    if(currentValue =="") {
        currentValue = "0";
    }
    displayBottom.innerHTML = currentValue;
});

function operateEquals () {
    let a = parseFloat(previousValue);
    let b = parseFloat(currentValue);
    topExpression += `${currentValue} = `;
    displayTop.innerHTML = topExpression;
    currentValue = String(operate(a, b));
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

function operate(a, b) {
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

