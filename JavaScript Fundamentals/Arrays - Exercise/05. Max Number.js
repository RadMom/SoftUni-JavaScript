function maxNumber(arr) {

    let arrMax = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let max = Number.MIN_VALUE;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] <= arr[j]) {
                max = Number.MIN_VALUE;
                break;
            } else {
                max = arr[i];
            }
        }
        if (arr[i] == max || i == arrLength - 1) {
            arrMax.push(arr[i]);
        }
    }
    console.log(arrMax.join(` `));
}
maxNumber([41, 41, 34, 20]);