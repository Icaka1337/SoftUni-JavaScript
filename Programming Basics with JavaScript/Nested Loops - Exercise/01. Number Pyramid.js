function numberPyramid(input) {
    let num = Number(input.shift());
    let current = 1;
    let output = "";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            output += `${current} `;
            current++;
            if (current > num) {
                break;
            }
        }
        console.log(output);
        output = "";
        if (current > num) {
            break;
        }
    }
}