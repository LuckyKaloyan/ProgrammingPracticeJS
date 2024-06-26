function mathoperations(input){

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = String(input[2]);


    switch(c){
        case '+' :
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;
        case '%':
            console.log(a%b);
            break;
        case '**':
            console.log(a**b);
            break;
    }
}