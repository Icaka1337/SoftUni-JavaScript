function equalSums(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let output = "";
    let evenSum = 0;
    let oddSum = 0;

    for (let j = num1; j <= num2; j++) {
        let currentNum = j.toString();
        for (let k = 0; k < currentNum.length; k++) {
            let currentDigit = Number(currentNum.charAt(k));
            if (k % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum == oddSum) {
            output += `${j} `;
        }
        evenSum = 0;
        oddSum = 0;
    }
    console.log(output);
}