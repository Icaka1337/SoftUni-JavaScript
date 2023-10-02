function sumEvenNumbers(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }
    let sum = 0;
    for (const element of input) {
        if (element % 2 == 0) {
            sum += element;
        }
    }

    console.log(sum)
}