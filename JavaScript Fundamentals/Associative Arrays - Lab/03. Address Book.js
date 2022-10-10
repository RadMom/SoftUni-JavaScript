function addresBook(arr) {

    let addressBook = {};
    for (let el of arr) {
        let [name, address] = el.split(`:`);
        addressBook[name] = address;
    }

    let sortedBook = Object.entries(addressBook);
    sortedBook.sort((a, b) =>
        a[0].localeCompare(b[0])
    )

    for (let el of sortedBook) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
    
}
addresBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);