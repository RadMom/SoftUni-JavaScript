function partyTime(arr) {

    let vip = [];
    let normal = [];
    let isParty = false;

    for (let i = 0; i < arr.length; i++) {

        let input = arr[i];
        if (input == "PARTY") {
            isParty = true;
            continue;
        }
        
        let firstChar = Number(input[0]);
        if (!isParty) {
            if (!isNaN(firstChar)) {
                vip.push(input);
            } else {
                normal.push(input)
            }
        } else {
            if (!isNaN(firstChar)) {
                vip.splice(vip.indexOf(input), 1);
            } else {
                normal.splice(normal.indexOf(input), 1);
            }
        }
    }

    let size = vip.length + normal.length;
    console.log(size);

    for (let el of vip) {
        console.log(el);
    }

    for (let el of normal) {
        console.log(el);
    }

}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);