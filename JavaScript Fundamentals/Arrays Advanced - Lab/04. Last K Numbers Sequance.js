function lastKNumbersSequance(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {

        let sequanceK = result.slice(-k);
        let sum = 0;
        for (let el of sequanceK) {
            sum += el;
        }
        result.push(sum);
    }
    console.log(result.join(` `));
}
lastKNumbersSequance(8,2);