function catalogue(arr) {

    let catalog = new Map();

    for (let i = 0; i < arr.length; i++) {

        let info = arr[i].split(` : `);
        catalog.set(info[0], Number(info[1]));
    }
    let sorted = new Map([...catalog].sort((a, b) =>
        a[0].localeCompare(b[0])));


    let firstLetters = []
    for (let key of sorted.keys()) {
        if (!firstLetters.includes(key[0])) {
            firstLetters.push(key[0])
        }
    }

    for (let letter of firstLetters) {
        console.log(letter);
        for (let el of sorted.keys()) {
            if (el[0] == letter) {
                console.log(`  ${el}: ${sorted.get(el)}`);
            }
        }
    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);