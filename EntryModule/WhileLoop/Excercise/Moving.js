function Moving(input){

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volume = width * length * height;

    let movedCartons = 0;
    let index = 3;
    let numCartons = input[index];
    while(true){
        numCartons = input[index++];
        if(numCartons === "Done"){
            break;
        }
        else{    movedCartons += parseInt(numCartons);   }
    }
    if(movedCartons > volume){
        console.log(`No more free space! You need ${Math.abs(movedCartons - volume)} Cubic meters more.`);
    }
    else {
        console.log(`${Math.abs(movedCartons - volume)} Cubic meters left.`);
    }
}
