function oddAndEvenSum(number) {

    let evenSum = 0;
    let oddSum = 0;

    let arr = number.toString().split(``).map(Number);

    arr.forEach(element => {
        if (element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);