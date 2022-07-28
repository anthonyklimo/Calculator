let bottomNumber = "0";
let topEquation = "0";

let displayBottom = document.getElementById("display-bottom");
let displayTop = document.getElementById("display-top");

displayBottom.innerHTML = bottomNumber;
displayTop.innerHTML = topEquation;

const numberButtons = document.querySelectorAll("[data-num]");
// operatorButtons: 
const deleteButton = document.getElementById("delete");
const toggleNegative = document.getElementById("toggle-negative");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");

clear.addEventListener("click", function() {
    bottomNumber = "0";
    topEquation = "0";
    displayBottom.innerHTML = bottomNumber;
    displayTop.innerHTML = topEquation;
});

decimal.addEventListener("click", function() {
    if(!bottomNumber.includes(".")) {
        bottomNumber += ".";
        displayBottom.innerHTML = bottomNumber;
    }
})

toggleNegative.addEventListener("click", function() {
    if(bottomNumber.charAt(0) == "-") {
        bottomNumber = bottomNumber.substring(1, bottomNumber.length);
    } else {
        bottomNumber = "-" + bottomNumber;
    }
    displayBottom.innerHTML = bottomNumber;
})

numberButtons.forEach(element => {
    element.addEventListener("click", function() {
        if(bottomNumber == "0") {
            bottomNumber = "";
        }
        bottomNumber += element.dataset.num;
        displayBottom.innerHTML = bottomNumber;
        console.log(bottomNumber);
    })
})
// for (let i = 0; i < 10; i++) {
//     numberButtons[i].addEventListener("click", function() {
//         if(bottomNumber == "0") {
//             bottomNumber = "";
//         }
//         bottomNumber += numberButtons[i].dataset.num;
//         displayBottom.innerHTML = bottomNumber;
//         console.log(bottomNumber);
//     })
// };

deleteButton.addEventListener("click", function() {   
    bottomNumber = bottomNumber.substring(0, bottomNumber.length - 1);
    if(bottomNumber =="") {
        bottomNumber = "0";
    }
    displayBottom.innerHTML = bottomNumber;
    console.log(bottomNumber);
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

function operator(a, b) {

}

