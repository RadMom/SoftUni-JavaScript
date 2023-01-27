function decryptingCommands(input) {

    let myString = input.shift();
    let command = input.shift();

    while (command !== "Finish") {

        let [curCommand, ...tokens] = command.split(` `)
        switch (curCommand) {

            case `Replace`:
                if (!myString.includes(tokens[0])) {
                    break;
                }
                while (myString.includes(tokens[0])) {
                    myString = myString.replace(tokens[0], tokens[1]);
                }
                console.log(myString);
                break;

            case `Cut`:
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                if (startIndex >= 0 && endIndex >= 0 && startIndex < myString.length && endIndex < myString.length && startIndex < endIndex) {
                    let subStr = myString.substring(startIndex, endIndex + 1);
                    myString = myString.replace(subStr, "");
                    console.log(myString);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;

            case `Make`:
                if (tokens[0] == "Upper") {
                    myString = myString.toUpperCase();
                } else {
                    myString = myString.toLowerCase();
                }
                console.log(myString);
                break;
            case `Check`:
                if (myString.includes(tokens[0])) {
                    console.log(`Message contains ${tokens[0]}`);
                } else {
                    console.log(`Message doesn\'t contain ${tokens[0]}`);
                }
                break;
            case `Sum`:
                let start = Number(tokens[0]);
                let end = Number(tokens[1]);
                if (start >= 0 && end >= 0 && start < myString.length && end < myString.length) {
                    let sub = myString.substr(start, end);

                    let sum = 0;
                    for (let i = 0; i < sub.length; i++) {
                        sum += sub.charCodeAt(i);
                    }
                    console.log(sum);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;
        }

        command = input.shift();
    }

}
decryptingCommands((["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])

);