function arrayRotation2(arr, numOfRotatios) {

    while (numOfRotatios > 0) {

        let elementToMove = arr.shift();
        arr.push(elementToMove);
        numOfRotatios--;
    }
    console.log(arr.join(` `));
}
arrayRotation2([51, 47, 32, 61, 21], 2);