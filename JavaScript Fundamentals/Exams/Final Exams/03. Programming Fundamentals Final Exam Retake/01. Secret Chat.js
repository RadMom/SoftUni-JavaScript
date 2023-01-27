function secretChat(input) {

    let message = input.shift()
    let command = input.shift()

    while (command !== "Reveal") {

        let [instructions, ...data] = command.split(`:|:`);

        switch (instructions) {
            case "InsertSpace":
                let start = message.substring(0, data[0]);
                let end = message.substring(data[0]);
                message = start + " " + end;
                console.log(message);
                break;

            case "Reverse":
                if (!message.includes(data[0])) {
                    console.log("error");
                    break;
                }

                let reversed = data[0].split(``).reverse().join(``);
                message = message.replace(data[0], "").concat(reversed);
                console.log(message);
                break;

            case "ChangeAll":
                if (!message.includes(data[0])) {
                    break;
                }
                while (message.includes(data[0])) {
                    message = message.replace(data[0], data[1]);
                }
                console.log(message);
                break;
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);