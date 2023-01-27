function heroesOfCodeAndLogic(input) {

    let n = Number(input.shift());
    let players = {};

    for (let i = 0; i < n; i++) {
        let info = input.shift().split(` `);
        players[info[0]] = {
            "HP": Number(info[1]),
            "MP": Number(info[2])
        };
    }

    let line = input.shift();

    while (line != "End") {

        let [command, name, ...tokens] = line.split(` - `);

        switch (command) {
            case `CastSpell`:
                if (players[name].MP >= Number(tokens[0])) {
                    players[name].MP -= Number(tokens[0]);
                    console.log(`${name} has successfully cast ${tokens[1]} and now has ${players[name].MP} MP!`);
                    break;
                }

                console.log(`${name} does not have enough MP to cast ${tokens[1]}!`);
                break;

            case `TakeDamage`:
                players[name].HP -= Number(tokens[0]);
                if (players[name].HP <= 0) {
                    console.log(`${name} has been killed by ${tokens[1]}!`);
                    delete players[name];
                    break;
                }

                console.log(`${name} was hit for ${tokens[0]} HP by ${tokens[1]} and now has ${players[name].HP} HP left!`);
                break;

            case `Recharge`:
                if ((players[name].MP + Number(tokens[0])) > 200) {
                    let increased = 200 - players[name].MP;
                    players[name].MP = 200;
                    console.log(`${name} recharged for ${increased} MP!`);
                    break;
                }

                players[name].MP += Number(tokens[0]);
                console.log(`${name} recharged for ${tokens[0]} MP!`);
                break;

            case `Heal`:

                if ((players[name].HP + Number(tokens[0])) > 100) {
                    let increased = 100 - players[name].HP;
                    players[name].HP = 100;
                    console.log(`${name} healed for ${increased} HP!`);
                    break;
                }

                players[name].HP += Number(tokens[0]);
                console.log(`${name} healed for ${tokens[0]} HP!`);
                break;
        }

        line = input.shift();
    }

    for (let player in players) {
        console.log(player);
        console.log(`  HP: ${players[player].HP}`);
        console.log(`  MP: ${players[player].MP}`);
    }
}
heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);