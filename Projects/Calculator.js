console.log("Javascript file loaded!");

let operation = "";

// if Submit button (in the html code) is pressed, this function is initiated.
function calculate(){
// parseInt (camelCase) is used to define a Int variable from a string.
let x = parseInt(document.getElementById('num1').value)
let y = parseInt(document.getElementById('num2').value)

let result;

if (operation === '+'){
    result = x + y;
}

else if (operation === '-'){
    result = x - y;
}

else if (operation === '*'){
    result = x * y;
}

else (operation === '/')
{
    result = x/y;
}

document.getElementById("result").textContent=result;
}

// change operation
function changeOperation(op) {
    operation = op;
}
