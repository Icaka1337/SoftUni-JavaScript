function sumNumbers(input) {
    let num = Number(input.shift());
    let sum = 0;

    while (sum < num) {
        sum += Number(input.shift());
    }

    console.log(sum)
}