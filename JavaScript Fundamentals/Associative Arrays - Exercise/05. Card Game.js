function cardGames(arr) {

    let final = new Map();

    let cardPowerInfo = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
    let cardTypeInfo = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    for (let el of arr) {
        let currInfo = el.split(`: `);
        let name = currInfo.shift();
        let cards = currInfo[0].split(`, `);

        if (!final.has(name)) {
            final.set(name, new Set());
        }

        for (let card of cards) {
            final.get(name).add(card);
        }
    }

    for (let [name, key] of final) {
        let sum = 0;
        for (let card of key) {
            let cardInfo = card.split(``);
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join(``);
            let cardTypeAsNumber = cardTypeInfo[cardType];
            let cardPowerAsNumber = cardPowerInfo[cardPower];
            sum += cardPowerAsNumber * cardTypeAsNumber;
        }

        console.log(`${name}: ${sum}`);
    }
}
cardGames([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);