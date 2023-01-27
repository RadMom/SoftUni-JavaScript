function bonusScoringSystem(arr) {

    let numArr = arr.map(Number);
    let students = numArr.shift();
    let lectures = numArr.shift();
    let bonus = numArr.shift();
    let [maxBonus, visitedLectures] = [0, 0];

    for (let i = 0; i < arr.length; i++) {

        let currBonus = numArr[i] / lectures * (5 + bonus);
        if (maxBonus < currBonus) {
            maxBonus = currBonus;
            visitedLectures = numArr[i];
        }
    }

    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${visitedLectures} lectures.`);
}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);