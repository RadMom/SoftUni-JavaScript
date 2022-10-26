function inventory(arr) {

    let heroes = []
    for (let hero of arr) {
        let [name, level, items] = hero.split(` / `)
        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }
        heroes.push(currentHero);
    }

    let sortedHeroes = heroes.sort((a, b) => {
        return a.level - b.level;
    })
    sortedHeroes.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);