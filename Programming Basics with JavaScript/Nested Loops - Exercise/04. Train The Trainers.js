function trainTheTrainers(input) {
    let juryCount = Number(input.shift());
    let presentationName = input.shift();
    let totalGradeSum = 0;
    let totalGradesCount = 0;
    while (presentationName !== 'Finish') {
        let presentationGrade = 0;
        let gradeSum = 0;
        for (let i = 1; i <= juryCount; i++) {
            presentationGrade = Number(input.shift());
            gradeSum += presentationGrade;
            totalGradeSum += presentationGrade;
            totalGradesCount++;
        }

        console.log(`${presentationName} - ${(gradeSum / juryCount).toFixed(2)}.`);
        presentationName = input.shift();
    }
    console.log(`Student's final assessment is ${(totalGradeSum / totalGradesCount).toFixed(2)}.`);
}