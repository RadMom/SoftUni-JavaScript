function shootForTheWin(arr) {

    let targets = arr.shift().split(` `).map(Number);
    let index = 0;
    let curTarget = arr[index];
    let shotTargets = 0;

    while (curTarget != `End`) {

        curTarget = Number(curTarget);
        if (curTarget >= 0 && curTarget < targets.length) {

            if (targets[curTarget] != -1) {
                let shotedTarget = targets[curTarget];
                targets[curTarget] = -1;
                shotTargets++;

                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] != -1) {
                        if (targets[i] > shotedTarget) {
                            targets[i] -= shotedTarget;
                        } else {
                            targets[i] += shotedTarget;
                        }
                    }
                }
            }
        }

        index++;
        curTarget = arr[index];
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(` `)}`);

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
