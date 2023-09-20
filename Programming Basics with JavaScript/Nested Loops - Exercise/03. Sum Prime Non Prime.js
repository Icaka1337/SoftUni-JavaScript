function sumPrimeNonPrime(input) {
    let n = input.shift();

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (n !== 'stop') {
        n = Number(n);
        if (n < 0) {
            console.log('Number is negative.');
        } else {
            let isPrime = true;
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeSum += n;
            } else {
                nonPrimeSum += n;
            }
        }
        n = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}