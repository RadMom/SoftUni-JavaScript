function theImaginationGame(input) {

    let message = input.shift();
    let index = 0;
    let currCommand = input[index];

    while (currCommand != "Decode") {

        let [command, ...tokens] = currCommand.split(`|`);

        switch (command) {
            case `Move`:
                let subStr = message.substring(0, tokens[0]);
                message = message.replace(subStr, "")
                    .concat(subStr);
                break;

            case `Insert`:
                message = message.slice(0, tokens[0]) + tokens[1] + message.slice(tokens[0]);
                break;

            case `ChangeAll`:
                while (true) {
                    let newMessage = message;
                    newMessage = newMessage.replace(tokens[0], tokens[1]);

                    if (newMessage == message) {
                        break;;
                    }
                    message = newMessage;
                }
                break;
        }

        index++;
        currCommand = input[index];
    }

    console.log(`The decrypted message is: ${message}`);
}
theImaginationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
);