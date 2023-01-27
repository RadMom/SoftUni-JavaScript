function muOnline(infoAsString) {

    let initialHealth = 100;
    let initialBitcoins = 0;
    const infoAsArr = infoAsString.split(`|`);

    for (let i = 0; i < infoAsArr.length; i++) {

        let [command, number] = infoAsArr[i].split(` `);
        switch (command) {

            case `potion`:
                if (initialHealth + Number(number) > 100) {
                    console.log(`You healed for ${100 - initialHealth} hp.`);
                    initialHealth = 100;
                } else {
                    initialHealth += Number(number);
                    console.log(`You healed for ${number} hp.`);
                }

                console.log(`Current health: ${initialHealth} hp.`);
                break;

            case `chest`:
                console.log(`You found ${number} bitcoins.`);
                initialBitcoins += Number(number);
                break;

            default:
                initialHealth -= Number(number);
                if (initialHealth > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                break;
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${initialBitcoins}`);
    console.log(`Health: ${initialHealth}`);

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");