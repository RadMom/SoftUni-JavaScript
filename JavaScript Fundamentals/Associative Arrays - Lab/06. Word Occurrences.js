function wordOccurrences(arr) {

    let list = {};

    for (let word of arr) {
        let counter = 1;
        if (list.hasOwnProperty(word)) {
            list[word] += counter;
        } else {
            list[word] = counter;
        }
    }

    let sorted = Object.entries(list).sort((a, b) => b[1] - a[1]);

    for (let name of sorted) {
        console.log(`${name[0]} -> ${name[1]} times`);
    }
    
}
wordOccurrences(["dog", "bye", "city", "dog", "city", "city", "city", "dad", "boys", "ginger"]);