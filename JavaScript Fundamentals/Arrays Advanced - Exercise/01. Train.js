function train(commands) {

    let arrContainingWagons = commands.shift().split(` `).map(Number);
    let maxCapacityPerWagon = Number(commands.shift());

    commandsLength = commands.length;

    for (let i = 0; i < commandsLength; i++) {
        let [command, number] = commands[i].split(` `);

        if (command.includes("Add")) {
            number = Number(number);
            arrContainingWagons.push(number);
        } else {
            command = Number(command);

            for (let i = 0; i < arrContainingWagons.length; i++) {
                if (arrContainingWagons[i] + command <= maxCapacityPerWagon) {
                    arrContainingWagons[i] += command;
                    break;
                }
            }
        }
    }
    console.log(arrContainingWagons.join(` `));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);