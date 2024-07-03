function solve(numbers, input) {
    let times = Number(numbers);
    let args = input; 

    for (let i = times-1; i >= 0; i--) {  
        console.log(args[i]);
    }
}

solve(3, [10, 20, 30, 40, 50]);