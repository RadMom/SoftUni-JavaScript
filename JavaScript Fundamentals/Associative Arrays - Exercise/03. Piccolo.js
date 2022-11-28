function piccolo(arr) {

    let parkingInfo = {}

    for (let carNumber of arr) {

        let [move, number] = carNumber.split(`, `);
        if (move == `IN`) {
            parkingInfo[number] = number;
        } else {
            delete parkingInfo[number];
        }
    }

    let info = Object.keys(parkingInfo).sort();
    for (let car in info) {

        console.log(info[car]);
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, RR5234TA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA',
    `IN, BG2234LL`
]);