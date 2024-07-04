function solve(text, word) {

    let regex = new RegExp(`\\b${word}\\b`, 'gi'); 


    let result = text.replace(regex, match => '*'.repeat(match.length));
   

    console.log(result);
    


}solve('Find the hidden word', 'hidden')






