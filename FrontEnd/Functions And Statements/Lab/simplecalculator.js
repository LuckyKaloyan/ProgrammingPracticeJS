function solve(firstInput,secondInput,symbol){

let firstNumber = Number(firstInput);
let secondNumber = Number(secondInput);
let operator = String(symbol);


switch(symbol){
    case "add" :
        console.log(firstNumber+secondNumber);
        break;
    case "subtract":
        console.log(firstNumber-secondNumber);
        break;
    case "multiply":
        console.log(firstNumber*secondNumber);
    case "divide":
        console.log(firstNumber/secondNumber);
}


}solve(12,
    19,
    'add'
    );