function arrayManipulator(arr, commands) {

    let comandsLength = commands.length;
    for (let i = 0; i < comandsLength; i++) {

        let currCommands = commands[i].split(` `);
        let command = currCommands.shift();
        let sumPairs = 0;
        let pairsOfNums = [];

        switch (command) {
            case `add`:
                arr.splice(currCommands[0], 0, Number(currCommands[1]));
                break;
            case `addMany`:
                let index = Number(currCommands.shift());
                arr.splice(index, 0, ...currCommands.map(Number));
                break;
            case `contains`:
                console.log(arr.indexOf(Number(currCommands)));
                break;
            case `remove`:
                arr.splice(currCommands, 1)
                break;
            case `shift`:
                for (let i = 0; i < Number(currCommands); i++) {
                    arr.push(arr.shift());
                }
                break;
            case `sumPairs`:
                if (arr.length % 2 != 0) {
                    arr.push(0);
                }
                for (let i = 0; i < arr.length; i += 2) {
                    sumPairs = arr[i] + arr[i + 1];
                    pairsOfNums.push(sumPairs);
                }
                arr = [...pairsOfNums];
                break;
            case `print`:
                console.log(`[ ${arr.join(`, `)} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]);
