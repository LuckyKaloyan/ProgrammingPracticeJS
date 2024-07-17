function wordstracker(input){

let args = input;

let words = input[0];
let splitted = words.split(" ");

let objects = [];

for(let i=0; i<splitted; i++){
    let object = {
        name:splitted[i],
        count:0,
    }

    objects.push(object);
}

for(let i=1; i<args.length; i++){

    let obj = objects.find(obj => obj.name === args[i]);
    if (obj) {
        obj.count++;

    }
}

for(let i=0; i<objects.length; i++){
    console.log(objects[i].name+" - "+objects[i].count);
}


}wordstracker()