function listOfProducts(arr) {

    let sorted = arr.sort();
    let sortedLength = sorted.length;

    for (let i = 0; i < sortedLength; i++) {

        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);