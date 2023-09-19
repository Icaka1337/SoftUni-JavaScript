function traveling(input) {
    let destination = input.shift();
    let moneyNeeded = Number(input.shift());
    let savedMoney = 0;

    while (destination != "End") {

        while (savedMoney < moneyNeeded) {
            savedMoney += Number(input.shift());
        }

        console.log(`Going to ${destination}!`);
        destination = input.shift();
        moneyNeeded = Number(input.shift());
        savedMoney = 0;
    }
}