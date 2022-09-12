function addAndSubtract(num1, num2, num3) {

    let sumNum1AndNum2 = sum(num1, num2);
    let finalResult = subtract(sumNum1AndNum2, num3)

    console.log(finalResult);

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function subtract(sumFirstAndSecond, third) {
        return sumFirstAndSecond - third;
    }
}
addAndSubtract(20, 3, 2);