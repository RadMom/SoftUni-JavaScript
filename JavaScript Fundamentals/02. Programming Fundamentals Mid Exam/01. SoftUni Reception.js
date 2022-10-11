function softUniReception(input) {

    let totalStudentsPerHour = input.slice(0, 3).map(Number).reduce((a, b) => a + b, 0);
    let studendts = Number(input[input.length - 1]);
    let counter = 0;
    let hoursCounter = 0;

    while (studendts > 0) {
        hoursCounter++;
        counter++

        if (counter > 3) {
            counter = 0;
        } else {
            studendts -= totalStudentsPerHour;
        }
    }

    console.log(`Time needed: ${hoursCounter}h.`);
}

softUniReception(['1', '2', '3', '45']);