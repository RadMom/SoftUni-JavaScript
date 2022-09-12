function repeatStrings2(inputString, repeatCount) {

    let result = ``;
    for (let i = 0; i < repeatCount; i++) {
        result += inputString;
    }
    return result;
}
repeatStrings2("abc", 3);