function reverseArrayOfNumbers(n, input) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(input[i]);
    }

    let output = '';
    arr.reverse().forEach(element => {
        output += element + ' ';
    });

    console.log(output);
}