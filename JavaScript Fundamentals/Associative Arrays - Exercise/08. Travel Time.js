function travelTime(arr) {

    let list = {};

    for (let i = 0; i < arr.length; i++) {
        let info = arr[i].split(` > `);
        let country = info[0];
        let town = info[1];
        let cost = Number(info[2]);

        if (!list.hasOwnProperty(country)) {
            list[country] = { [town]: cost };
        } else {
            if (list[country].hasOwnProperty(town)) {
                if (list[country][town] > cost) {
                    list[country][town] = cost
                }
            } else {
                list[country][town] = cost
            }
        }
    }

    let sorted = Object.keys(list).sort((a, b) =>
        a.localeCompare(b));

    for (let country of sorted) {

        let sortedCost = Array.from(Object.entries(list[country]))
            .sort(([keyA, valueA], [keyB, valueB]) =>
                valueA - valueB);

        let result = []
        for (let [town, cost] of sortedCost) {
            result.push(`${town} -> ${cost}`)
        }

        console.log(`${country} -> ${result.join(` `)}`);
    }

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 100",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);