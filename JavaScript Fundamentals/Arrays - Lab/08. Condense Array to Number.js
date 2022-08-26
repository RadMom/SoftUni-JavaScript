function condenseArrayToNumber(arr) {

    while (arr.length > 1) {
        let condensedArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condensedArr[i] = arr[i] + arr[i + 1];
        }
        arr = condensedArr;
    }
    console.log(arr.join(` `));
}
condenseArrayToNumber([5, 0, 4, 1, 2]);