function thePianist(input) {

    let result = {};

    let n = input.shift();
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[i].split(`|`);
        result[piece] = { [composer]: key };
    }

    input.splice(0, n)

    let curCommand = input.shift();

    while (curCommand != `Stop`) {

        let [command, curPiece, curComposer, curKey] = curCommand.split(`|`)

        switch (command) {

            case `Add`:
                if (!result.hasOwnProperty(curPiece)) {
                    result[curPiece] = { [curComposer]: curKey };
                    console.log(`${curPiece} by ${curComposer} in ${curKey} added to the collection!`);
                    break;
                }
                console.log(`${curPiece} is already in the collection!`);
                break;

            case `Remove`:
                if (!result.hasOwnProperty(curPiece)) {
                    console.log(`Invalid operation! ${curPiece} does not exist in the collection.`);
                    break;
                }
                delete result[curPiece];
                console.log(`Successfully removed ${curPiece}!`);
                break;

            case `ChangeKey`:
                if (!result.hasOwnProperty(curPiece)) {
                    console.log(`Invalid operation! ${curPiece} does not exist in the collection.`);
                    break;
                }
                for (let [keyComposer, valueKey] of Object.entries(result[curPiece])) {
                    result[curPiece][keyComposer] = curComposer;
                }
                console.log(`Changed the key of ${curPiece} to ${curComposer}!`);
                break;
        }

        curCommand = input.shift();
    }

    for (let piece in result) {
        for (let [composer, key] of Object.entries(result[piece])) {
            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
        }
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);