function storeProvision(arr1, arr2) {

    let provisions = {};

    for (let i = 0; i < arr1.length; i += 2) {

        let product = arr1[i];
        provisions[product] = Number(arr1[i + 1]);
    }

    for (let j = 0; j < arr2.length; j += 2) {

        let product = arr2[j];
        if (!provisions.hasOwnProperty(product)) {
            provisions[product] = Number(arr2[j + 1]);
        } else {
            provisions[product] += provisions[product] = Number(arr2[j + 1]);
        }
    }

    for (let el in provisions) {
        console.log(`${el} -> ${provisions[el]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']);