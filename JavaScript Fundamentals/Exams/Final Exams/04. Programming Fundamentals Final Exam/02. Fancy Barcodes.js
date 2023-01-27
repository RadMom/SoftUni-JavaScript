function fancyBarcode(input) {

    let n = input.shift();

    for (let i = 0; i < input.length; i++) {

        let regEx = /(@#{1,})([A-Z][A-Za-z0-9]{4,})[A-Z](@#{1,})/g;
        let sum = "";

        if (input[i].match(regEx)) {

            let barcode = regEx.exec(input[i]);
            let barcodeGroup = barcode[2];
            for (let ch of barcodeGroup) {
                if (!isNaN(ch)) {
                    sum += ch;
                }
            };

            if (sum.length === 0) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${sum}`);
            }
            continue;
        }

        console.log("Invalid barcode");

    }
}
fancyBarcode(
    ["6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"]);