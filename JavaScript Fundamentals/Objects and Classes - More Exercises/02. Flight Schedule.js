function flightSchedule(arr) {

    let flightsInfo = arr.shift();
    let changedStatus = arr.shift();;
    let flightStatus = arr.shift();

    let finalFlights = {};

    for (let currFlight of flightsInfo) {
        let currFlightInfo = currFlight.split(` `);
        let currFlightNumber = currFlightInfo.shift();
        let currFlightDestination = currFlightInfo.join(` `);
        finalFlights[currFlightNumber] = { Destination: currFlightDestination, Status: "Ready to fly" }
    }

    for (let currFlightStatus of changedStatus) {
        let [flightNumber, currStatus] = currFlightStatus.split(` `)

        if (finalFlights.hasOwnProperty(flightNumber)) {
            finalFlights[flightNumber].Status = currStatus;
        }
    }

    for (let flights in finalFlights) {
        if (finalFlights[flights].Status == flightStatus) {
            console.log(finalFlights[flights]);
        }
    }

}
flightSchedule(
    [['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']

    ]);