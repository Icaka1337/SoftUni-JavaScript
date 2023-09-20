function examPreparation(input) {
    let maxBadGrades = Number(input.shift());
    let totalBadGrades = 0;
    let totalGrades = 0;
    let lastTask;
    let averageGrade = 0;

    while (totalBadGrades < maxBadGrades) {
        let name = input.shift();
        if (name == "Enough") {
            break;
        }
        let grade = Number(input.shift());

        if (grade <= 4) {
            totalBadGrades++;
            if (totalBadGrades >= maxBadGrades) {
                console.log(`You need a break, ${totalBadGrades} poor grades.`)
            }
        }
        totalGrades++;
        averageGrade += grade;
        lastTask = name;
    }
    if (totalBadGrades<maxBadGrades) {
        console.log(`Average score: ${(averageGrade/totalGrades).toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${lastTask}`);
    }
}