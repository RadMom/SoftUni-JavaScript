function passwordReset(input) {

    let pass = input.shift();
    let line = input.shift();

    while (line != "Done") {
        let [command, token1, token2] = line.split(` `)
        switch (command) {

            case `TakeOdd`:
                let newPass = "";
                for (let i = 1; i < pass.length; i += 2) {
                    newPass += pass[i];
                }
                pass = newPass;
                console.log(pass);
                break;

            case `Cut`:
                let subStr = pass.substr(Number(token1), Number(token2));
                pass = pass.replace(subStr, "");
                console.log(pass);
                break;

            case `Substitute`:

                if (pass === pass.replace(token1, token2)) {
                    console.log("Nothing to replace!");
                    break;
                }

                while (true) {
                    let newPass = pass;
                    newPass = newPass.replace(token1, token2);

                    if (newPass == pass) {
                        break;;
                    }
                    pass = newPass;
                }
                console.log(pass);
                break;
        }

        line = input.shift();
    }

    console.log(`Your password is: ${pass}`);

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);