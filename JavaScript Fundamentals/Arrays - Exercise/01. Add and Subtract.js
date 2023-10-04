function addAndSubtract(arr) {
    let originalSum = 0;
    let modifiedSum = 0;

    arr.forEach(element => {
        originalSum += element;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    arr.forEach(element => {
        modifiedSum += element;
    });


    console.log(arr);
    console.log(originalSum);
    console.log(modifiedSum);
}