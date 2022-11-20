function destinationMappers(input) {

    let regExPattern = /[=\/]([A-Z][A-Z a-z]{2,})[=\/]/g;

    let matches = input.match(regExPattern);
    let validDestinations = [];

    if (matches == null) {
        console.log(`Destinations:`);
        console.log(`Travel Points: ${0}`);
        return;
    }

    for (let destination of matches) {
        if (destination[0] === destination[destination.length - 1]) {
            let valid = "";

            for (let i = 1; i < destination.length - 1; i++) {
                valid += destination[i];
            }
            validDestinations.push(valid);
        }
    }

    console.log(`Destinations: ${validDestinations.join(`, `)}`);

    let travelPoints = validDestinations.join(``);

    console.log(`Travel Points: ${travelPoints.length}`);
}
destinationMappers("invalid==i5valid=/I5valid/=i==Hawai=/Cyprus/=Invalid");