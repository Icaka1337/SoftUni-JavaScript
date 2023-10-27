function magicMatrices(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b);
    let temp = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            temp += matrix[j][i];
        }
        if (temp != sum) {
            isMagic = false;
        }
        temp = 0;
    }

    for (let i = 0; i < matrix.length; i++) {
        temp += matrix[i].reduce((a, b) => a + b);
        if (temp != sum) {
            isMagic = false;
        }
        temp = 0;
    }

    console.log(isMagic);
}