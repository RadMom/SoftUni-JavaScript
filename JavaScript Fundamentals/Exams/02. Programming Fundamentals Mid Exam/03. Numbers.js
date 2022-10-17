function numbers(arr) {

    let numArr = arr.split(` `).map(Number);
    let total = 0;

    for (let num of numArr) {
        total += num;
    }

    let average = total / numArr.length;
    let biggerThanAverage = [];

    for (let num of numArr) {

        if (num > average) {
            biggerThanAverage.push(num);
        }
    }

    if (biggerThanAverage.length < 1) {
        console.log(`No`);
        return;
    }

    let sorted = biggerThanAverage.sort(function (a, b) { return b - a });

    if (sorted.length < 5) {
        console.log(sorted.slice(0, sorted.length).join(` `));
    } else {
        console.log(sorted.slice(0, 5).join(` `));
    }

}
numbers('-1 -2 -3 -4 -5 -6');