function nXnMatrix(num) {

    let matrix = [];
    for (let i = 1; i <= num; i++) {
        let row = [];
        for (let j = 1; j <= num; j++) {
            row.push(num);
        }
        matrix.push(row.join(` `));
    }
    console.log(matrix.join(`\n`));
}
nXnMatrix(7);