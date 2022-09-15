function computerStore(partsPrices) {

    let index = 0;
    let command = partsPrices[index];
    let priceWithoutTax = 0;
    while (command != "special" && command != "regular") {

        if (Number(command) < 0) {
            console.log("Invalid price!");
            index++;
            command = partsPrices[index]
            continue;
        }
        priceWithoutTax += Number(command);
        index++;
        command = partsPrices[index];
    }

    let tax = priceWithoutTax * 1.2 - priceWithoutTax;
    let totalWithTax = priceWithoutTax + tax;

    if (command === "special") {
        totalWithTax *= 0.9
    }
    
    if (priceWithoutTax === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalWithTax.toFixed(2)}$`)
    }
}
computerStore(([
    'regular'
])

);