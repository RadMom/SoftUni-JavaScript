function processOddNumbers2(arr) {

    let oddElements = arr.filter((el, i) => i % 2 != 0)
    oddElements = oddElements.map(x => x * 2);

    console.log(oddElements.reverse().join(` `));

}
processOddNumbers2([10, 15, 20, 25]);