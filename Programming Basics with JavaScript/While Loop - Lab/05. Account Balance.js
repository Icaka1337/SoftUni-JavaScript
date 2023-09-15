function accountBalance(input) {
    let num = input.shift();
    let money = 0;
    while (num != "NoMoreMoney") {
        num = Number(num);
        if (num < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        console.log(`Increase: ${num.toFixed(2)}`)
        money += num;
        num = input.shift();
    }
    console.log(`Total: ${money.toFixed(2)}`)
}