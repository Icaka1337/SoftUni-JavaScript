function tennisRanklist(input) {
    let tournaments = Number(input.shift());
    let startingPoints = Number(input.shift());
    let tournamentsWon = 0;
    let totalPoints = startingPoints;

    for (let i = 0; i < tournaments; i++) {
        let outcome = input.shift();

        if (outcome == "W") {
            tournamentsWon++;
            totalPoints += 2000;
        } else if (outcome == "F") {
            totalPoints += 1200;
        } else if (outcome == "SF") {
            totalPoints += 720;
        }
    }

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints-startingPoints) / tournaments)}`);
    console.log(`${((tournamentsWon / tournaments) * 100).toFixed(2)}%`)
}