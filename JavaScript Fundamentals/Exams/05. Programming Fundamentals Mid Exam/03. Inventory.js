function inventory(arr) {

    let inventory = arr.shift().split(`, `);
    let index = 0;
    let command = arr[index];

    while (command != `Craft!`) {

        let [token1, token2] = command.split(` - `);

        switch (token1) {
            case `Collect`:
                if (!inventory.includes(token2)) {
                    inventory.push(token2)
                }
                break;

            case `Drop`:
                if (inventory.includes(token2)) {
                    inventory.splice(inventory.indexOf(token2), 1);
                }
                break;

            case `Combine Items`:
                let [oldItem, newItem] = token2.split(`:`);
                if (inventory.includes(oldItem)) {
                    inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
                }
                break;

            case `Renew`:
                if (inventory.includes(token2)) {
                    inventory.splice(inventory.indexOf(token2), 1);
                    inventory.push(token2);
                }
                break;
        }

        index++;
        command = arr[index];
    }

    console.log(inventory.join(`, `));

}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]

);