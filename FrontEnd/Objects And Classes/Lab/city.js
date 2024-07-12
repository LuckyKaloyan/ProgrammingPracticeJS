function city({ name,area,population,country,postCode }){

    let city = {
        name:name,
        area:area,
        population:population,
        country:country,
        postCode:postCode,
    }

console.log(city);


}city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)