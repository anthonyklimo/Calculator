let currentValue = "0";
let previousValue = "0";
let topExpression = "";
let isOperatorActive = false;

let displayBottom = document.getElementById("display-bottom");
let displayTop = document.getElementById("display-top");

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
        if(isOperatorActive == false) {
            isOperatorActive = true;
        }
    console.log(topExpression);
    previousValue = currentValue;
    currentValue = '0';
    })
})

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
    let a = parseFloat(previousValue);
    console.log(a);
    let b = parseFloat(currentValue);
    console.log(b);
    currentValue = operate(a, b);
    displayBottom.innerHTML = currentValue;

})

deleteButton.addEventListener("click", function() {   
    currentValue = currentValue.substring(0, currentValue.length - 1);
    if(currentValue =="") {
        currentValue = "0";
    }
    displayBottom.innerHTML = currentValue;
});

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
    if(topExpression.includes("+")) {
        return add(a, b);
    } else if (topExpression.includes("-")) {
        return subtract(a, b);
    } else if (topExpression.includes("x")) {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

