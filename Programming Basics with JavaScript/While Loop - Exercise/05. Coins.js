function coins(input) {
    let money = Math.round(input.shift() * 100);
    let coins = 0;

    while (money > 0) {
        if (money >= 200) {
            money -= 200;
            coins++;
        } else if (money >= 100) {
            money -= 100;
            coins++;
        } else if (money >= 50) {
            money -= 50;
            coins++;
        } else if (money >= 20) {
            money -= 20;
            coins++;
        } else if (money >= 10) {
            money -= 10;
            coins++;
        } else if (money >= 5) {
            money -= 5;
            coins++;
        } else if (money >= 2) {
            money -= 2;
            coins++;
        } else if (money >= 1) {
            money -= 1;
            coins++;
        }
    }

    console.log(coins)
}