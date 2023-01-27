function taxCalculator(str) {

    let cars = str[0].split(`>>`);
    let totalTax = 0;

    for (let i = 0; i < cars.length; i++) {

        let carInfo = cars[i].split(` `);
        let type = carInfo[0];
        let years = Number(carInfo[1]);
        let kilometers = Number(carInfo[2]);
        let tax = 0;

        switch (type) {
            case `family`:
                tax += 50;
                tax -= years * 5;
                tax += Math.floor(kilometers / 3000) * 12;
                break;
            case `heavyDuty`:
                tax += 80;
                tax -= years * 8;
                tax += Math.floor(kilometers / 9000) * 14;
                break;
            case `sports`:
                tax += 100;
                tax -= years * 9;
                tax += Math.floor(kilometers / 2000) * 18;
                break;
            default:
                console.log("Invalid car type.");
                continue;
        }
        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        totalTax += tax;

    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']));