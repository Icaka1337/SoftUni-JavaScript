function equalSum(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let isEqual = false;

    if (arr.length == 1) {
        console.log(0);
        isEqual = true;
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let k = 0; k < i; k++) {
                sum1 += arr[k];
            }
            for (let j = i + 1; j < arr.length; j++) {
                sum2 += arr[j];
            }

            if (sum1 == sum2) {
                console.log(i);
                isEqual = true;
                break;
            }
            sum1 = 0;
            sum2 = 0;
        }
    }
    if (!isEqual) {
        console.log("no")
    }
}