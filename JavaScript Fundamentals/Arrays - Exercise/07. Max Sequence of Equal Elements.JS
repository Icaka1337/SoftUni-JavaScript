function maxSequence(arr) {
    let sequenceCount = 0;
    let maxSequenceNumber = 0;
    let currentCount = 0;
    let currentNum = arr[0];
    let sameNumbers = true;

    for (let i = 0; i < arr.length; i++) {
        if (currentNum == arr[i]) {
            currentCount++;
        } else {
            sameNumbers = false;
            if (currentCount > sequenceCount && currentNum != arr[i]) {
                sequenceCount = currentCount;
                maxSequenceNumber = arr[i - 1];
            }
            currentCount = 1;
            currentNum = arr[i];
        }
    }
    if (sameNumbers) {
        maxSequenceNumber = arr[0];
        sequenceCount = currentCount;
    }

    let output = "";

    for (let j = 0; j < sequenceCount; j++) {
        output += `${maxSequenceNumber} `;
    }

    console.log(output);
}