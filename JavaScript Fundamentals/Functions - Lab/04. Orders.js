function orders(product, quantity) {

    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;

    let total = product * quantity;

    switch (product) {
        case "coffee": total = coffee * quantity; break;
        case "water": total = water * quantity; break;
        case "coke": total = coke * quantity; break;
        case "snacks": total = snacks * quantity; break;
    }

    console.log(total.toFixed(2));
}
orders("coffee", 2);