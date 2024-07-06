function solve(input){

    let sentance = String(input);

    let array = sentance.split(' ');

    for(let i=0; i<array.length; i++){
        if(array[i].charAt(0)==='#' && array[i].length>1){
            console.log(array[i].substring(1));
        }
    }


}solve('The symbol # is known #variously in English-speaking #regions as the #number sign')