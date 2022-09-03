function maxNumber2(arr) {

    let arrMax = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let isLargest = true;
        for (j = i + 1; j < arrLength; j++) {
            if (arr[i] <= arr[j]) {
                isLargest = false;
                break;
            }
        }
        if (isLargest) {
            arrMax.push(arr[i]);
        }
    }
    console.log(arrMax.join(` `));
}
maxNumber2([14, 24, 3, 19, 15, 17]);