function modernTimesOfHashTags(str) {

    let strAsArr = str.split(` `);
    let result = [];

    for (let word of strAsArr) {

        if (word[0] === `#` && word.length > 1) {

            let myWord = word.substring(1);
            let regEx = /^[a-zA-Z]+$/

            if (regEx.test(myWord) == true) {
                result.push(myWord);
            }
        }
    }

    console.log(result.join(`\n`));
}
modernTimesOfHashTags(
    'The symbol # is known #variously in English-speaking #regions as the #number sign');