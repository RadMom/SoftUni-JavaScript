function counterStrike(arr) {

    let energy = Number(arr.shift());
    let winCounter = 0;
    let index = 0;
    let currCommand = arr[index];

    while (currCommand != "End of battle") {

        if (energy >= currCommand) {
            energy -= currCommand;
            winCounter = winCounter + 1;
        } else {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
            return;
        }

        if (winCounter % 3 == 0) {
            energy += winCounter;
        }

        index++;
        currCommand = arr[index];
    }

    console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);

}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])

);