function searchForANumber(arr, instructions) {

    let newArr = arr.slice(0, instructions[0]);
    newArr.splice(0, instructions[1]);

    let counter = 0;
    for (let el of newArr) {
        if (el === instructions[2]) {
            counter++;
        }
    }

    console.log(`Number ${instructions[2]} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);