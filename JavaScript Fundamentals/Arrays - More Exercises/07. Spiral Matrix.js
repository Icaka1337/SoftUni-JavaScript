function spiralMatrix(n1, n2) {
    let matrix = [];
    for (let i = 0; i < n1; i++) {
        matrix.push([]);
        for (let j = 0; j < n2; j++) {
            matrix[i].push(0);
        }
    }

    let counter = 1;
    let startRow = 0;
    let endRow = n1 - 1;
    let startCol = 0;
    let endCol = n2 - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = counter;
                counter++;
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = counter;
                counter++;
            }
            startCol++;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}