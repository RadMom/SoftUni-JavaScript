function stringSunstring(word, text) {

    let textAsArr = text.split(` `);

    let wordToLowerCase = word.toLowerCase();

    for (let currWord of textAsArr) {
        
        let currWordToLowerCase = currWord.toLowerCase();
        if (wordToLowerCase === currWordToLowerCase) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}
stringSunstring(
    'javascript',
    'JavaScript is the best programming language');