function maxNumber(input) {
    let num = input.shift();
    let maxNum = Number.MIN_SAFE_INTEGER

    while (num != "Stop") {
        num = Number(num);
        if (num > maxNum) {
            maxNum=num;
        }
        num=input.shift();
    }

    console.log(maxNum)
}