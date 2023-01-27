function race(input) {

    let participants = input.shift().split(`, `);
    let paternName = /(?<name>[A-Za-z]+)/g;
    let paternNumbers = /[\d]/g;

    let namesInfo = new Map();
    participants.forEach(element => namesInfo.set(element, 0));

    let line = input.shift();

    while (line != "end of race") {
        let distance = 0;
        let nameResult = line.match(paternName).join(``);

        if (namesInfo.has(nameResult)) {

            let numbersResult = line.match(paternNumbers);
            numbersResult.forEach(element => distance += Number(element));

            let newDistance = namesInfo.get(nameResult) + distance;
            namesInfo.set(nameResult, newDistance);
        }

        line = input.shift();
    }

    let sorted = Array.from(namesInfo).sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA
    });

    let top3 = sorted.slice(0, 3);

    console.log(`1st place: ${top3[0][0]}`);
    console.log(`2nd place: ${top3[1][0]}`);
    console.log(`3rd place: ${top3[2][0]}`);

}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);