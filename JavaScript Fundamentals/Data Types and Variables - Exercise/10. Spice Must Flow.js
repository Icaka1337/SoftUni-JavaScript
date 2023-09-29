function spiceMustFlow(startingYield) {
    let totalYield = 0;
    let daysOperated = 0;

    while (startingYield >= 100) {
        totalYield += startingYield - 26;
        startingYield -= 10;
        daysOperated++;
        if (startingYield < 100) {
            break;
        }
    }

    totalYield -= 26;
    if (totalYield < 0) {
        totalYield = 0;
    }

    console.log(daysOperated);
    console.log(totalYield);
}