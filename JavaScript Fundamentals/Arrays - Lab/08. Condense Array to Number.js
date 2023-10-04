function condenseArray(arr) {
    arr.forEach(element => {
        Number(element);
    });
    let i = 0;
    while (arr.length > 1) {
        arr[i] = arr[i] + arr[i + 1];
        if (i == arr.length - 2) {
            arr.splice(i + 1, 1);
            i = -1;
        }
        i++;
    }
    console.log(arr.shift());
}