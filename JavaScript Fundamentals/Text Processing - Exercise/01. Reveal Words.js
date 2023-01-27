function revealWords(words, str) {

    let wordsAsArr = words.split(`, `);
    let strAsArr = str.split(` `);

    for (let i = 0; i < strAsArr.length; i++) {

        if (strAsArr[i].includes(`*`)) {

            for (let word of wordsAsArr) {
                if (word.length == strAsArr[i].length) {
                    strAsArr[i] = word;
                }
            }
        }
    }
    console.log(strAsArr.join(` `));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');