function bombNumber(arr, parameters) {

    let specialBombNum = parameters[0];
    let power = parameters[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === specialBombNum) {
            if (i - power < 0) {
                arr.splice(0, i + power + 1);

            } else {
                arr.splice(i - power, power * 2 + 1)
            }
            i = 0;
        }
    }

    let sum = 0;
    for (el of arr) {
        sum += el;
    }
    console.log(sum);
}
bombNumber([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],

    [2, 2]);