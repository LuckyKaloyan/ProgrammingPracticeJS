function solve(wordsString, sentance){

    let output = String(sentance);
    let stringArr = wordsString.split(', ');

    for(let i=0; i<stringArr.length; i++){
        let stringCheck = String('');
        for(let j=0; j<stringArr[i].length; j++){
            stringCheck=stringCheck+'*';
        }
        console.log(stringCheck);
        output= output.replace(stringCheck,stringArr[i]);
    }



    console.log(output);




}solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);