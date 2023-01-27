function schoolRegister(arr) {

    let studentsRegister = {};

    for (let student of arr) {
        let currStudentInfo = student.split(`, `);
        let currName = currStudentInfo[0].split(`: `).pop();
        let currGrade = Number(currStudentInfo[1].split(`: `).pop()) + 1;
        let currAverageScore = Number(currStudentInfo[2].split(`: `).pop());

        if (currAverageScore >= 3) {
            let student = { name: currName, score: currAverageScore };
            if (!studentsRegister.hasOwnProperty(currGrade)) {
                studentsRegister[currGrade] = [];
            }
            studentsRegister[currGrade].push(student);
        }
    }

    for (let grade in studentsRegister) {

        let students = studentsRegister[grade];
        let totalScore = 0;
        for (let el of students) {
            totalScore += el.score;
        }
        let avScore = totalScore / students.length;

        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${avScore.toFixed(2)}`);
        console.log();
    }
   

}
schoolRegister([
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);