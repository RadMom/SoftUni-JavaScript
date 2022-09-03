function commonElements2(arr1, arr2) {

    for (const element of arr1) {
        if (arr2.includes(element)) {
            console.log(element);
        }
    }
}
commonElements2(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])