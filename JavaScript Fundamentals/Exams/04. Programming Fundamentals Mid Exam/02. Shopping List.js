function shoppingList(arr) {

    let initialList = arr.shift().split(`!`);
    let index = 0;
    let commmand = arr[index].split(` `).shift();

    while (commmand != `Go Shopping!`) {

        let commandInfo = arr[index].split(` `);
        let token1 = commandInfo[1];
        let token2 = commandInfo[2]
        switch (commandInfo[0]) {
            case `Urgent`:
                if (!initialList.includes(token1)) {
                    initialList.unshift(token1);
                }
                break;
            case `Unnecessary`:
                if (initialList.includes(token1)) {
                    initialList.splice(initialList.indexOf(token1), 1);
                }
                break;
            case `Correct`:
                if (initialList.includes(token1)) {
                    initialList.splice(initialList.indexOf(token1), 1, token2);
                }
                break;
            case `Rearrange`:
                if (initialList.includes(token1)) {
                    initialList.splice(initialList.indexOf(token1), 1,);
                    initialList.push(token1);
                }
                break;
        }

        index++;
        commmand = arr[index];
    }

    console.log(initialList.join(`, `));
}
shoppingList(
    (["Milk!Pepper!Salt!Water!Banana",
        "Urgent Davki",
        "Urgent Davki",
        "Correct Pepper Onion",
        "Rearrange Davki",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"])

);