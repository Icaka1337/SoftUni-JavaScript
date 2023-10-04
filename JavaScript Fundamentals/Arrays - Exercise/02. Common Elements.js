function commonElement(arr1, arr2) {
    arr1.forEach(firstArray => {
        arr2.forEach(secondArray => {
            if (firstArray === secondArray) {
                console.log(firstArray);
            }
        });
    });
}