function firstAndLastKNumbers2(arr) {

    let kNum = arr.shift();

    console.log(arr.slice(0, kNum).join(` `));
    console.log(arr.slice(- kNum).join(` `));
}
firstAndLastKNumbers2([3, 6, 7, 8, 9]);