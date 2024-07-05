function solve(input, n) {
    let args = input;
    let nth = n;
let newargs = [];
    for (let i = 0; i < args.length; i = i + nth) {
        newargs.push(args[i]);
    }
  
    console.log(newargs);
}solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2)


