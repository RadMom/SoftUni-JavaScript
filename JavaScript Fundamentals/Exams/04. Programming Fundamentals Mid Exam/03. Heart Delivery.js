function heartDelivery(arr) {

    let housePoints = arr.shift().split(`@`).map(Number);
    let arrLength = arr.length;
    let position = 0;
    for (let i = 0; i < arrLength; i++) {

        let jumpInfo = arr[i].split(` `);
        let token1 = Number(jumpInfo[1]);
        housePointsLength = housePoints.length;
        
        if (jumpInfo[0] == "Love!") {
            console.log(`Cupid's last position was ${position}.`);
            let countFailed = 0;

            for (let house of housePoints) {
                if (house > 0) {
                    countFailed++;
                }
            }

            if (countFailed > 0) {
                console.log(`Cupid has failed ${countFailed} places.`);
            } else {
                console.log(`Mission was successful.`);
            }
            return;
        }

        if (position + token1 > housePointsLength - 1) {
            position = 0;

            if (housePoints[position] == 0) {
                console.log(`Place ${position} already had Valentine's day.`);
            } else {
                if (housePoints[position] > 2) {
                    housePoints[position] -= 2;
                } else {
                    housePoints[position] = 0;
                    console.log(`Place ${position} has Valentine's day.`);
                }
            }
        } else {
            position += token1;

            if (housePoints[position] == 0) {
                console.log(`Place ${position} already had Valentine's day.`);
            } else {
                if (housePoints[position] > 2) {
                    housePoints[position] -= 2;
                } else {
                    housePoints[position] = 0;
                    console.log(`Place ${position} has Valentine's day.`);
                }
            }
        }
    }
}

heartDelivery((["2@4@2@2@2@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])

);