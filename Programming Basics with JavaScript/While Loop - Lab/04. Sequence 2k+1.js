function sequence2k1(input) {
    let num = Number(input.shift());
    let n = 1;

    while (n <= num) {
        console.log(n)
        n = (n * 2) + 1;
    }
}