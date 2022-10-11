function arrayModifier(arr) {

    let myArr = arr.shift().split(` `).map(Number);

    for (let command of arr) {
        let commandInfo = command.split(` `)
        let currComand = commandInfo.shift();
        if (currComand == `end`) {
            break;
        }

        let [index1, index2] = commandInfo;
        let index1Arr = Number(myArr[index1]);
        let index2Arr = Number(myArr[index2]);

        switch (currComand) {
            case `swap`:
                myArr.splice(index1, 1, index2Arr);
                myArr.splice(index2, 1, index1Arr)
                break;
            case `multiply`:
                let result = index1Arr * index2Arr;
                myArr.splice(index1, 1, result)
                break;
            case `decrease`:
                for (let i = 0; i < myArr.length; i++) {
                    myArr[i] = myArr[i] - 1;
                }
                break;
            default:
                console.log(`unknown`);
                break;
        }
    }

    console.log(myArr.join(`, `));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);