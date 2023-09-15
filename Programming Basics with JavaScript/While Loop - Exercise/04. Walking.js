function walking(input) {
    let totalSteps = 0;

    while (true) {
        let steps = input.shift();

        if (steps == "Going home") {
            let stepsToHome = Number(input.shift());
            totalSteps += stepsToHome;
            if (totalSteps >= 10000) {
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - 10000} steps over the goal!`);
                break;
            }
            break;
        }
        steps = Number(steps);
        totalSteps += steps;

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }
    }

    if (totalSteps < 10000) {
        console.log(`${10000 - totalSteps} more steps to reach goal.`)
    }
}