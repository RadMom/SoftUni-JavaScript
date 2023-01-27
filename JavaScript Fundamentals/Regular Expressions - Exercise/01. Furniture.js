function furniture(input) {

    let furnitures = [];
    let totalSum = 0;
    let patern = /[>]{2}(?<furniture>[A-Z][A-Za-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;

    let line = input.shift();

    while (line != "Purchase") {

        if (line.match(patern)) {
            let result = patern.exec(line);
            furnitures.push(result.groups.furniture);
            totalSum += Number(result.groups.price) * Number(result.groups.quantity);
        }

        line = input.shift();
    }

    console.log(`Bought furniture:`);
    furnitures.forEach(element => console.log(element));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);