function pascalCaseSplitter(input){

    let myText = input.replace(/([A-Z])/g, ' $1').trim().split(` `);
    console.log(myText.join(`, `));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');