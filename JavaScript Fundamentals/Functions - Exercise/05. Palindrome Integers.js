function palindrome(arr) {

    for (let element of arr) {
        let currElement = String(element);
        let reversedElement = currElement.split(``).reverse().join(``);

        if (currElement === reversedElement) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindrome([123, 323, 421, 121]);