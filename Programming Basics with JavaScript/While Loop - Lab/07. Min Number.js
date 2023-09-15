function minNumber(input) {
    let num = input.shift();
    let minNum = Number.MAX_SAFE_INTEGER;

    while (num != "Stop") {
        num = Number(num);
        if (num < minNum) {
            minNum = num;
        }
        num = input.shift();
    }

    console.log(minNum);
}