function printAndSum(num1, num2) {

    let sum = 0;
    let printLine = ``
    for (let i = num1; i <= num2; i++) {
        sum += i;
        printLine += i + ` `;
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)