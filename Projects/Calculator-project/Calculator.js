console.log("Javascript file loaded!");

let operation = "";

// if Submit button (in the html code) is pressed, this function is initiated.
function calculate(){
// parseInt (camelCase) is used to define a Int variable from a string.
let x = Number(document.getElementById('num1').value)
let y = Number(document.getElementById('num2').value)
// creates the Result variable. Result is intended to change based on the numbers inputted inside of the code. So we use let.
let result;

if (operation === "+"){
    result = x + y;
}else if (operation === "-"){
    result = x - y;
}else if (operation === "*"){
    result = x * y;
} else {
    result = x / y;
} 

document.getElementById("result").textContent=result;
}

// change operation
function changeOperation(op) {
    operation = op;
}
