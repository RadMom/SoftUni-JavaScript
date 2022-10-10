function storage(arr) {

    let map = new Map();

    for (let el of arr) {
        let info = el.split(` `);
        let product = info[0];
        let quantity = Number(info[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity + quantity;
            map.set(product, newQuantity);
        }
    }

    for (let el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);