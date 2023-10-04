function equalArrays(arr1, arr2) {
    let areEqual = true;
    let sum = 0;

    arr1.forEach((element) => {
        element = Number(element);
        sum += element;
    });
    arr2.forEach((element) => {
        element = Number(element);
    });

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}