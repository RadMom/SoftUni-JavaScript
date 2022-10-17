function guineaPig(arr) {

    let foodInKg = Number(arr.shift());
    let hayInKg = Number(arr.shift());
    let coverInKg = Number(arr.shift());
    let weight = Number(arr);

    for (let i = 1; i <= 30; i++) {

        foodInKg -= 0.3;
        if (i % 2 == 0) {
            hayInKg -= foodInKg * 0.05;
        }
        if (i % 3 == 0) {
            coverInKg -= weight / 3;
        }

        if (foodInKg <= 0 || hayInKg <= 0 || coverInKg <= 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`);

}
guineaPig((["10",
    "5",
    "5.2",
    "1"])
);