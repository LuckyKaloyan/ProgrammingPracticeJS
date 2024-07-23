function solve() {

let input = document.getElementById("input").value.split(".");
let paragraphs;

for(let i=0; i<input.length; i++){
 
  let paragraph = document.createElement("p");
  paragraphs.push(paragraph);
}


document.getElementById("output").append(paragraph);
}