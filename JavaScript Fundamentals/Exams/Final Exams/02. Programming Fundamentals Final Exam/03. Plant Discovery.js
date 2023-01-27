function plantDiscovery(input) {

    let n = Number(input.shift());
    let info = input.splice(0, n);

    let plants = {};

    for (let line of info) {
        let [plant, rarity] = line.split(`<->`);
        rarity = Number(rarity);
        plants[plant] = {};
        plants[plant][rarity] = [];
    }

    let command = input.shift();

    while (command != "Exhibition") {

        let [curCommand, ...tokens] = command.split(`: `);
        let [plant, token1] = tokens[0].split(` - `);

        switch (curCommand) {
            case `Rate`:
                if (!plants.hasOwnProperty(plant)) {
                    console.log("error");
                    break;
                }

                for (let [rarity, curRate] of Object.entries(plants[plant])) {
                    token1 = Number(token1);
                    curRate.push(token1);
                }
                break;

            case `Update`:
                if (!plants.hasOwnProperty(plant)) {
                    console.log("error");
                    break;
                }
                for (let key of Object.entries(plants[plant])) {
                    token1 = Number(token1);
                    plants[plant] = { [token1]: key[1] }
                }
                break;

            case `Reset`:
                if (!plants.hasOwnProperty(plant)) {
                    console.log("error");
                    break;
                }
                for (let key in plants[plant]) {
                    plants[plant] = { [key]: [] };
                }
                break;
        }

        command = input.shift();
    }

    console.log("Plants for the exhibition:");
    for (let el of Object.entries(plants)) {

        for (let [rarity, rating] of Object.entries(el[1])) {
            if (rating.length == 0) {
                rating = 0;
            } else {
                rating = rating.reduce((a, b) => a + b, 0) / rating.length;
            }

            console.log(`- ${el[0]}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
        }
    }

}
plantDiscovery(
    ["3",
        "Welwitschia<->5",
        "Woodii<->7",
        "Arnoldii<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"]);