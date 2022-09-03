function arrayRotation(arr, numOfRotations) {

    for (let i = 0; i < numOfRotations; i++) {
        let tempIndex = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = tempIndex;
    }

    console.log(arr.join(` `));
}
arrayRotation([51, 47, 32, 61, 21], 2);