function firstAndLastKNumbers(arr) {

    let kNum = arr[0];
    let newArr = [];

    for (let i = 1; i <= kNum; i++) {
        newArr.push(arr[i]);
    }

    for (let j = arr.length - kNum; j < arr.length; j++) {
        newArr.push(arr[j]);
    }

    console.log(newArr.slice(0, kNum).join(` `));
    console.log(newArr.slice(kNum).join(` `));
}
firstAndLastKNumbers([3, 6, 7, 8, 9])