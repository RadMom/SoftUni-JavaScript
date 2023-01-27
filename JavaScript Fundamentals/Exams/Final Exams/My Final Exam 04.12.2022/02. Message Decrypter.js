function messageDecrypter(input) {

    let num = Number(input.shift());
    let pattern = /^(\$|%)(?<tag>[A-Z][a-z]{2,})\1: (\[(?<one>[0-9]{1,})\])\|(\[(?<two>[0-9]{1,})\])\|(\[(?<three>[0-9]{1,})\])\|$/gm;
   
    for (let i = 0; i < num; i++) {

        let result = pattern.exec(input[i]);
        let message = "";
        if (result === null) {
            console.log("Valid message not found!");

        } else {
            counter++;
            let one = Number(result.groups.one);
            message += String.fromCharCode(one);
            let two = Number(result.groups.two);
            message += String.fromCharCode(two);
            let three = Number(result.groups.three);
            message += String.fromCharCode(three);

            console.log(`${result.groups.tag}: ${message}`);
        }

    }

    
}

messageDecrypter((["4",
    ])
);