function charactersInRange(fisrtChar, secondChar) {

    let startChar = Math.min(fisrtChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(fisrtChar.charCodeAt(0), secondChar.charCodeAt(0));
    let arr = [];

    for (let i = startChar + 1; i < endChar; i++) {
        arr.push(String.fromCharCode(i));
    }
    console.log(arr.join(` `));

}
charactersInRange('#', ':');