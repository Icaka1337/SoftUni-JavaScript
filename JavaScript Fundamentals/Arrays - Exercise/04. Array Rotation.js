function arrayRotation(arr, arrRotations) {
    let newArr = [];
    for (let i = 0; i < arrRotations; i++) {

        let temp = arr[0];
        for (let i = 1; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        newArr.push(temp);
        arr = newArr;
        newArr = [];
    }

    console.log(arr.join(" "));
}