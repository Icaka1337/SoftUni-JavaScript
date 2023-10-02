function evenAndOddSubtraction(input) {
    let evenSum = 0;
    let oddSum = 0;
    for (const element of input) {
        if (element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    console.log(evenSum - oddSum);
}