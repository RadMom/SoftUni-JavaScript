function processOddNumbers(arr) {

    let arrLength = arr.length;
    let newArr = [];

    for (let i = 0; i < arrLength; i++) {

        if (i % 2 != 0) {
            let curNum = arr[i] * 2;
            newArr.push(curNum);
        }
    }

    console.log(newArr.reverse().join(` `));
}
processOddNumbers([10, 15, 20, 25]);