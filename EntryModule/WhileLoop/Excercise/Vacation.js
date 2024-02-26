function Vacation(input){

let neededMoney = Number(input[0]);
let startingBudget = Number(input[1]);
let commandIndex = 2;
let amountIndex = 3;
let timesSpent = 0;
let daysCounter = 0;
let failed = false;

while(timesSpent<5){
    daysCounter++;
    command = input[commandIndex];
if(command==="spend"){
    startingBudget=startingBudget-input[amountIndex];
    if(startingBudget<=0){
      startingBudget=0;
    }
    timesSpent++;
    if(timesSpent===5){
        failed = true;
        break;
    }
}else{
    startingBudget=startingBudget+input[amountIndex];
    timesSpent=0; 
    if(startingBudget>=neededMoney){
        break;
    }
}
commandIndex=commandIndex+2;
amountIndex=amountIndex+2;

}
if(failed){
    console.log("You can't save the money.");
    console.log(daysCounter);
}else{
    console.log("You saved the money for "+daysCounter+" days.");
}
}