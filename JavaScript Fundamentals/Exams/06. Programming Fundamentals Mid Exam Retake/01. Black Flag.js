function blackFlag(input) {

    let inputAsNumArr = input.map(Number);
    let days = inputAsNumArr[0];
    let dailyPlunder = inputAsNumArr[1];
    let expectedPlunder = inputAsNumArr[2];
    let ourPlunder = 0;

    for (let i = 1; i <= days; i++) {

        ourPlunder += dailyPlunder;
        if (i % 3 == 0) {
            ourPlunder += dailyPlunder / 2;
        }
        if (i % 5 == 0) {
            ourPlunder *= 0.70;
        }
    }

    if (ourPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${ourPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(ourPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }

}
blackFlag((["10",
    "20",
    "380"])
);