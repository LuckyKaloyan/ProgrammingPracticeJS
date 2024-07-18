function solve(input){

let args = input;
let objects = [];

for(let i=0; i<args.length; i++){
    let splitted = args[i].split(":");

    
    
    let object ={
              name:splitted[0],
              term:splitted[1],
    }
      let nameSplit = object.name.split('"');
      let termSplit = object.term.split('"');
    
    object.name=nameSplit[1];
    object.term=termSplit[1];

    objects.push(object);
}

objects.sort((a,b)=> {
    if (b.name > a.name) {
        return -1;
    } else if (b.name < a.name) {
        return 1;
    } else {
        return 0;
    }
})

for(let i=0; i<objects.length; i++){
    console.log("Term: "+objects[i].name+" => Definition: "+objects[i].term)
}


}solve([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]
    )