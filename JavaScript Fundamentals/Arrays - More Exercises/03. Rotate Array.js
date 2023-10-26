function rotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(" "));
}