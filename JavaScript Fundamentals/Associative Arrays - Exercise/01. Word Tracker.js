function wordtracker(arr) {

    let result = new Map();
    let words = arr.shift().split(` `);

    for (let word of words) {
        result.set(word, 0)
    }

    for (let arrWord of arr) {
        if (result.has(arrWord)) {
            let oldValue = result.get(arrWord)
            result.set(arrWord, oldValue += 1)
        }
    }
console.log(result);
    let sorted = Array.from(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA
    })

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}
wordtracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);