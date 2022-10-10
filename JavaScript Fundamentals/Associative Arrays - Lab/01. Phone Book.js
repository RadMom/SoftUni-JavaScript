function phoneBook(arr) {

    let phoneBooks = {};

    for (let el of arr) {
        let line = el.split(` `);
        let name = line[0];
        let number = line[1];
        phoneBooks[name] = number;
    }

    for (let key in phoneBooks) {
        console.log(`${key} -> ${phoneBooks[key]}`);
    }

}

phoneBook(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);