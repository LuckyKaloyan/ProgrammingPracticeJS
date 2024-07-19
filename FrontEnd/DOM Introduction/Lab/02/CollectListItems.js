function extractText() {
    
let liElements = document.getElementById('items').getElementsByTagName('li');

let word = "";

for(let i=0; i<liElements.length; i++){
    word=word+liElements[i].innerText+"\n";
}

   document.getElementById('result').value=word;
}