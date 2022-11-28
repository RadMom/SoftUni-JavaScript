function aMinerTask(arr) {

    let final = {};

    for (let i = 0; i < arr.length; i += 2) {
        let metal = arr[i];
        if (!final.hasOwnProperty(metal)) {
            final[metal] = Number(arr[i + 1])
        } else {
            final[metal] += Number(arr[i + 1]);
        }
    }

    let finalArr = Array.from(final);
    for (let el in final) {
        console.log(`${el} -> ${final[el]}`);
    }

}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '165',
]);