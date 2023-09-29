function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let brokenShieldCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += helmetPrice;
            expenses += swordPrice;
            expenses += shieldPrice;
            brokenShieldCount++;
        } else if (i % 2 == 0) {
            expenses += helmetPrice;
        } else if (i % 3 == 0) {
            expenses += swordPrice;
        }
        if (brokenShieldCount == 2) {
            expenses += armorPrice;
            brokenShieldCount=0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}