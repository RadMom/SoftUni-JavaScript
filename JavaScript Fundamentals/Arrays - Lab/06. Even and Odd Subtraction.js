function evenAndOddSubstraction(arr) {

    let evenSum = 0;
    let oddSum = 0;
    for (i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubstraction([3, 5, 7, 9]);