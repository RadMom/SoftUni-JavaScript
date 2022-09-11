function negativeAndPositiveNumbers(arr) {

    arr = arr.map(Number);
    let newArr = [];

    for (let element of arr) {

        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }

    console.log(newArr.join(`\n`));
}
negativeAndPositiveNumbers(['7', '-2', '8', '9']);