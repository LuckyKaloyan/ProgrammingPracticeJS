function sumCharacters(input) {


    let sum = 0;
    let number = String(input);

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
   console.log(sum);


}sumCharacters(31313)
