function replaceRepeatingChars(input) {

    let text = "";
    for (let i = 0; i < input.length; i++) {

        if (input[i] !== input[i - 1]) {
            text += input[i];
        }
    }

    console.log(text);
}
replaceRepeatingChars(`aaaaabbbbbcdddeeeedssaa`);