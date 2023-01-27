function chatLogger(arr) {

    let chat = [];
    let index = 0;
    let commandS = arr[index];

    while (commandS != `end`) {
        let currCommands = commandS.split(` `);
        let currCommand = currCommands.shift();

        switch (currCommand) {
            case `Chat`:
                chat.push(currCommands[0]);
                break;
            case `Delete`:
                if (chat.includes(currCommands[0])) {
                    chat.splice(chat.indexOf(currCommands[0]), 1);
                }
                break;
            case `Edit`:
                if (chat.includes(currCommands[0])) {
                    chat.splice(chat.indexOf(currCommands[0]), 1, currCommands[1]);
                }
                break;
            case `Pin`:
                if (chat.includes(currCommands[0])) {
                    chat.splice(chat.indexOf(currCommands[0]), 1);
                    chat.push(currCommands[0]);
                }
                break;
            case `Spam`:
                chat.push(...currCommands);
                break;
        }

        index++;
        commandS = arr[index];
    }

    for (let el of chat) {
        console.log(el);
    }

}
chatLogger(([
    "Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"]),
);