function theatrepromotions(input){
    
    let day = String(input[0]);
    let age = Number(input[1]);


    switch(day){
        case 'Weekday' :
            if(age>=0 && age<=18){
                console.log('12$');
            }
            
    }

    
}theatrepromotions(['Weekday',10])