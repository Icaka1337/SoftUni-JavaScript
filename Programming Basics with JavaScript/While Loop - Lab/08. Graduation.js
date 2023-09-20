function graduation(input) {
    let name = input.shift();
    let badGrade = 0;
    let averageGrades = 0;
    let gradeCount = 0;

    while (badGrade < 2 && gradeCount < 12) {
        let grade = Number(input.shift());
        if (grade < 4) {
            badGrade++;
            averageGrades += grade;
            if (badGrade == 2) {
                console.log(`${name} has been excluded at ${gradeCount} grade`)
                break;
            }
            gradeCount++;
        } else {
            averageGrades += grade;
            gradeCount++;
        }
    }
    
    averageGrades /= gradeCount;

    if (gradeCount == 12) {
        console.log(`${name} graduated. Average grade: ${averageGrades.toFixed(2)}`)
    }
}