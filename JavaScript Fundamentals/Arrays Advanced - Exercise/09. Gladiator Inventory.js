function gladiatorInventory(arr) {

    let inventory = arr.shift().split(` `);

    for (let i = 0; i < arr.length; i++) {
        let commandS = arr[i].split(` `)
        let command = commandS.shift();

        switch (command) {
            case `Buy`:
                if (!inventory.includes(commandS[0])) {
                    inventory.push(commandS[0]);
                }
                break;
            case `Trash`:
                if (inventory.indexOf(commandS[0]) != -1) {
                    inventory.splice(inventory.indexOf(commandS[0]), 1);
                }
                break;
            case `Repair`:
                if (inventory.indexOf(commandS[0] != -1)) {
                    inventory.splice(inventory.indexOf(commandS[0]), 1);
                    inventory.push(commandS[0]);
                }
                break;
            case `Upgrade`:
                let updateInfo = commandS[0].split(`-`);
                if (inventory.indexOf(updateInfo[0]) != -1) {
                    inventory.splice(inventory.indexOf(updateInfo[0]) + 1, 0, `${updateInfo[0]}:${updateInfo[1]}`);
                }
                break;
        }
    }
    console.log(inventory.join(` `));
}
gladiatorInventory([`SWORD Shield Spear`,
    `Trash Bow`,
    `Repair Shield`,
    `Upgrade Helmet-V`]);