function sorting(arr) {


    let finalArr = [];
    let ascendingOrder = arr.slice(0).sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            finalArr.push(ascendingOrder.pop());
        } else {
            finalArr.push(ascendingOrder.shift());
        }
    }

    console.log(finalArr.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);