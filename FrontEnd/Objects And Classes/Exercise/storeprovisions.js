function solve(input, inputTwo) {
    let argsOne = input;
    let argsTwo = inputTwo;

    let mapche = new Map();

    for (let i = 0; i < argsOne.length; i = i + 2) {
        let object = {
            name: argsOne[i],
            quantity: parseInt(argsOne[i + 1])
        };
        mapche.set(object.name, object.quantity);
    }

    for (let i = 0; i < argsTwo.length; i = i + 2) {
        let object = {
            name: argsTwo[i],
            quantity: parseInt(argsTwo[i + 1])
        };

        if (mapche.has(object.name)) {
            mapche.set(object.name, mapche.get(object.name) + object.quantity);
        } else {
            mapche.set(object.name, object.quantity);
        }
    }

    for (let [name, quantity] of mapche.entries()) {
        console.log(`${name} -> ${quantity}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);
