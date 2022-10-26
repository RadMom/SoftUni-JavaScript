function towns(arr) {

    let towns = {};

    for (let town of arr) {
        let myTown = town.split(` | `)
        towns.town = myTown[0];
        towns.latitude = Number(myTown[1]).toFixed(2);
        towns.longitude = Number(myTown[2]).toFixed(2);
        console.log(towns);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);