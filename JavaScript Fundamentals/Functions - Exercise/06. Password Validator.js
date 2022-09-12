function passwordValidator(password) {

    let passLength = password.length;
    if (passLength <= 6 && passLength >= 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    let startLetter = fromCharCode(a);
    let endLetter = fromCharCode(Z);
    let digitCounter = 0;
    for (let element of password) {
        if (element < startLetter && element > endLetter`Z`) {
            console.log("Password must consist only of letters and digits");
            break;
        } if (element >= 0 && element <= 9) {
            digitCounter++;
        }
    }
    if (digitCounter < 3) {
        console.log("Password must have at least 2 digits");
    } else {
        console.log("Password is valid");
    }
}
passwordValidator('Pa$s$s')