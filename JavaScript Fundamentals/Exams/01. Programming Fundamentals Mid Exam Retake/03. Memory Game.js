function memoryGame(input) {

    let arrSequance = input.shift().split(` `);
    let index = 0;
    let command = input[index];
    let moves = 0;

    while (command != "end") {

        moves++;
        let indexes = command.split(` `);

        if (indexes[0] < 0 || indexes[0] >= arrSequance.length ||
            indexes[1] < 0 || indexes[1] >= arrSequance.length ||
            indexes[0] == indexes[1]) {
            console.log("Invalid input! Adding additional elements to the board");
            arrSequance.splice(arrSequance.length / 2, 0, `-${moves}a`, `-${moves}a`)
            index++;
            command = input[index];
            continue;
        }
        if (arrSequance[indexes[0]] === arrSequance[indexes[1]]) {
            console.log(`Congrats! You have found matching elements - ${arrSequance[indexes[0]]}!`);
            arrSequance.splice(indexes[0], 1);

            if (indexes[0] < indexes[1]) {
                arrSequance.splice(indexes[1] - 1, 1);
            } else {
                arrSequance.splice(indexes[1], 1);
            }
            index++;
            command = input[index];
        } else {
            console.log("Try again!");
            index++;
            command = input[index];
        }
        if (arrSequance.length < 1) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
    }

    if (arrSequance.length > 0) {
        console.log("Sorry you lose :(");
        console.log(arrSequance.join(` `));
    }

}
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "8 6",
    "0 3",
    "end"
]

)