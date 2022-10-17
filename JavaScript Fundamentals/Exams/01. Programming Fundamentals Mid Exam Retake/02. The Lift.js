function theLift(input) {

    let maxPplPerWagon = 4;
    let pplOnQueue = Number(input.shift());
    let wagons = input[0].split(" ").map(Number);


    while (pplOnQueue > 0) {

        for (let i = 0; i < wagons.length; i++) {
            let pplToAdd = 0;

            if (wagons[i] < maxPplPerWagon) {
                if (pplOnQueue >= 4 - wagons[i]) {
                    pplToAdd = 4 - wagons[i];
                    pplOnQueue -= pplToAdd;
                    wagons[i] += pplToAdd;
                } else {
                    pplToAdd = pplOnQueue;
                    pplOnQueue = 0;
                    wagons[i] += pplToAdd;
                }
            } else {
                continue;
            }
        }
        if (pplOnQueue > 0) {
            console.log(`There isn't enough space! ${pplOnQueue} people in a queue!`);
            break;
        }

    }
    for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] < maxPplPerWagon) {
            console.log("The lift has empty spots!");
            break;
        }
    }

    console.log(wagons.join(` `));
}
theLift(["21", "0 0 0 0 0"]);