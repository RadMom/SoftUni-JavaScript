function needForSpeedIII(input) {

    let numbersOfCars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < numbersOfCars; i++) {

        let [car, mileage, fuel] = input.shift().split(`|`);
        cars[car] = {
            "mileage": Number(mileage),
            "fuel": Number(fuel)
        }
    }

    let line = input.shift();

    while (line != "Stop") {

        let [command, car, ...tokens] = line.split(` : `);

        switch (command) {

            case `Drive`:
                if (cars[car].fuel >= Number(tokens[1])) {
                    cars[car].fuel -= Number(tokens[1]);
                } else {
                    console.log("Not enough fuel to make that ride");
                    break;
                }

                cars[car].mileage += Number(tokens[0])
                console.log(`${car} driven for ${tokens[0]} kilometers. ${tokens[1]} liters of fuel consumed.`);

                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
                break;

            case `Refuel`:

                if (cars[car].fuel + Number(tokens[0]) > 75) {
                    let addedFuel = 75 - cars[car].fuel;
                    cars[car].fuel = 75;
                    console.log(`${car} refueled with ${addedFuel} liters`);
                } else {
                    cars[car].fuel += Number(tokens[0]);
                    console.log(`${car} refueled with ${tokens[0]} liters`);
                }
                break;

            case `Revert`:

                cars[car].mileage -= Number(tokens[0]);
                if (cars[car].mileage < 10000) {
                    cars[car].mileage = 10000;
                    break;
                }

                console.log(`${car} mileage decreased by ${tokens[0]} kilometers`);

                break;
        }

        line = input.shift();
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);