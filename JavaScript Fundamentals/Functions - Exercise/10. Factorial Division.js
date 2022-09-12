function factorialDivision(num1, num2) {

    let num1Factorial = 1;
    let num2Factorial = 1;

    for (let i = 2; i <= num1; i++) {
        num1Factorial *= i;
    }
    for (let i = 2; i <= num2; i++) {
        num2Factorial *= i;
    }

    let result = num1Factorial / num2Factorial;

    console.log(result.toFixed(2));
}
factorialDivision(5, 2);