function movingTarget(arr) {

    let targets = arr.shift().split(` `).map(Number);

    for (let i = 0; i < arr.length; i++) {

        let info = arr[i].split(` `);
        let command = info[0];
        let token1 = Number(info[1]);
        let token2 = Number(info[2]);

        switch (command) {
            case `End`:
                console.log(targets.join(`|`));
                return;
            case `Shoot`:
                if (token1 >= 0 && token1 < targets.length) {
                    targets[token1] -= token2;
                    if (targets[token1] <= 0) {
                        targets.splice(token1, 1);
                    }
                }
                break;
            case `Add`:
                if (token1 >= 0 && token1 < targets.length) {
                    targets.splice(token1, 0, token2)
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case `Strike`:
                if (token1 - token2 >= 0 && token1 + token2 < targets.length) {
                    targets.splice(token1 - token2, token2 * 2 + 1);
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }
    }
}
movingTarget(
    (["1 2 3 4 5",
        "Strike 0 1",
        "Add 2 60",
        "End"])
);