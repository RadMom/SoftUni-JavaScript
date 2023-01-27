function degustationParty(input) {

    let line = input.shift();
    let result = {};
    let counterUnlikedMeals = 0;

    while (line !== "Stop") {
        let [command, name, meal] = line.split(`-`);

        switch (command) {
            case "Like":
                if (!result.hasOwnProperty(name)) {
                    result[name] = [];
                    result[name].push(meal);
                    break;
                }
                if (result[name].includes(meal)) {
                    break;
                }
                result[name].push(meal);
                break;
            case "Dislike":
                if (!result.hasOwnProperty(name)) {
                    console.log(`${name} is not at the party.`);
                    break;
                }
                if (!result[name].includes(meal)) {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    break;
                }
                let index = result[name].indexOf(meal);
                result[name].splice(index, 1);
                console.log(`${name} doesn't like the ${meal}.`);
                counterUnlikedMeals++;
                break;
        }


        line = input.shift();
    }

    for (let guest in result) {
        console.log(`${guest}: ${result[guest].join(`, `)}`);
    }

    console.log(`Unliked meals: ${counterUnlikedMeals}`);
}
degustationParty(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"]);