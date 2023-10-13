function printNthElement(arr) {
    let output = [];
    let n = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % n == 0) {
            output.push(arr[i]);
        }
    }

    console.log(output.join(" "))
}