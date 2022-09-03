function magicSum2(arr, sum) {

    arrLength = arr.length;
    let arrValidPairs = [];
    let validpair = ``;

    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] + arr[j] === sum) {
                validpair = `${arr[i]} ${arr[j]}`
                arrValidPairs.push(validpair);
            }
        }
    }
    console.log(arrValidPairs.join(`\n`));
}
magicSum2([14, 20, 60, 13, 7, 19, 8], 27);