function vacation(input) {
    let neededMoney = Number(input.shift());
    let availableMoney = Number(input.shift());
    let days = 0;
    let spendingDays = 0;

    while (true) {
        days++;
        let spendOrSave = input.shift();
        let amount = Number(input.shift());
        if (spendOrSave == "spend") {
            availableMoney -= amount;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            spendingDays++;
            if (spendingDays >= 5) {
                console.log(`You can't save the money.`)
                console.log(days);
                break;
            }
        } else if (spendOrSave == "save") {
            availableMoney += amount;
            spendingDays = 0;
        }
        if (availableMoney >= neededMoney) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}