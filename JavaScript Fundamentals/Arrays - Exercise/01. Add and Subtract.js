function addAndSubtract(arr) {

    let modifiedArray = [];
    let sumArr = 0;
    let sumModifiedArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        if (arr[i] % 2 == 0) {
            modifiedArray[i] = arr[i] + i;
            sumModifiedArr += modifiedArray[i];
        } else {
            modifiedArray[i] = arr[i] - i;
            sumModifiedArr += modifiedArray[i];
        }
    }
    console.log(modifiedArray);
    console.log(sumArr);
    console.log(sumModifiedArr);
}
addAndSubtract([5, 15, 23, 56, 35]);