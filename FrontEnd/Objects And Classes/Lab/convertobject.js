function convertobject(input){

      let text = JSON.parse(input);

      console.log("name: "+text.name);
      console.log("age: "+text.age);
      console.log("town: "+text.town);


}convertobject('{"name": "George", "age": 40, "town": "Sofia"}');