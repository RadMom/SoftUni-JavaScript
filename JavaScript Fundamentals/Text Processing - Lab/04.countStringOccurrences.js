function countStringOccurrencec(text, word) {

    let textAsArr = text.split(` `);
    let counter = 0;

    for (let el of textAsArr) {
        if (el == word) {
            counter++;
        }
    }

    console.log(counter);

}
countStringOccurrencec('This is a word and it also is a sentence', 'is');