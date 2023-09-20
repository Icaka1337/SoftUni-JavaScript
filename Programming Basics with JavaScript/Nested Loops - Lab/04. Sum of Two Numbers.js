function sumOfTwoNumbers(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let magicNum = Number(input.shift());
    let combinationsCount = 0;
    let foundMagicNum = false;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            combinationsCount++;
            if (i + j == magicNum) {
                foundMagicNum = true;
                console.log(`Combination N:${combinationsCount} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }
        if (foundMagicNum) {
            break;
        }
    }
    if (foundMagicNum == false) {
        console.log(`${combinationsCount} combinations - neither equals ${magicNum}`);
    }
}