function maxSequenceOfEqualElements2(arr) {

    let arrLength = arr.length;
    let maxSequence = [];

    for (let i = 0; i < arrLength; i++) {

        
        let currentSequence = [];
        for (let j = i; j < arrLength; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[i]);
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(` `));
}
maxSequenceOfEqualElements2([0, 1, 1, 5, 2, 2, 6, 3, 3]);