function addAndSubstract2(arr) {

    let arrLength = arr.length;
    let arrSum = 0;
    let modifiedArrSum = 0;

    for (let i = 0; i < arrLength; i++) {
        arrSum += arr[i];
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        modifiedArrSum += arr[i];
    }
    console.log(arr);
    console.log(arrSum);
    console.log(modifiedArrSum);
}
addAndSubstract2([5, 15, 23, 56, 35]);