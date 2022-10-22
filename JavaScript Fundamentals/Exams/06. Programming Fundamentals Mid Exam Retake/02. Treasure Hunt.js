function treasureHunt(input) {

    let initials = input.shift().split(`|`);
    let index = 0;
    let commands = input[index];

    while (commands != `Yohoho!`) {

        let commandsInfo = commands.split(` `);
        let currCommand = commandsInfo.shift();

        switch (currCommand) {

            case `Loot`:
                for (let i = 0; i < commandsInfo.length; i++) {
                    if (!initials.includes(commandsInfo[i])) {
                        initials.unshift(commandsInfo[i]);
                    }
                }
                break;
            case `Drop`:
                commandsInfo = Number(commandsInfo);
                if (initials[commandsInfo] !== undefined) {
                    let currEl = initials[commandsInfo];
                    initials.splice(commandsInfo, 1);
                    initials.push(currEl);
                }
                break;
            case `Steal`:
                let stolenItems = initials.splice(-commandsInfo);
                console.log(stolenItems.join(`, `));
                break;
        }

        index++;
        commands = input[index];
    }

    let allLength = 0;
    for (let item of initials) {
        allLength += item.length;
    }

    if (initials.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${(allLength / initials.length).toFixed(2)} pirate credits.`);
    }

}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]));