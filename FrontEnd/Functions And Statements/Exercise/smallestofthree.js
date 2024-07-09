function solve(numberA,numberB,numberC){

if(numberA>=numberB){
    if(numberC<numberB){
        console.log(numberC);
    }else{
        console.log(numberB);
    }
}else{
    if(numberA<=numberB){
        console.log(numberA);
    }else{
        console.log(numberB);
    }
}


}solve(7,6,4)