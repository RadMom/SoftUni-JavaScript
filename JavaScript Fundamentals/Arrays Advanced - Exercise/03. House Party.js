function houseParty(arr) {

    let resultArr = [];

    for (let el of arr) {
        let command = el.split(` `);
        let name = command[0];

        if (command.length === 3) {
            if (resultArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                resultArr.push(name);
            }
        } else {
            if (resultArr.includes(name)) {
                let index = resultArr.indexOf(name);
                resultArr.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(resultArr.join(`\n`));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);