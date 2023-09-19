function building(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    let output = "";

    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                output += `L${i}${j} `;
            } else if (i % 2 == 0) {
                output += `O${i}${j} `;
            } else if (i % 2 != 0) {
                output += `A${i}${j} `;
            }
        }
        console.log(output)
        output = "";
    }
}