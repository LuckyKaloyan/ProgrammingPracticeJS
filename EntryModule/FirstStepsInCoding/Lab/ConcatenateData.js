function ConcatenateData(dataArray){
    const [firstname, lastname, age, town] = dataArray;
    console.log(`You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`);
}
 ConcatenateData(['Maria', 'Ivanova', 20, 'Sofia'])