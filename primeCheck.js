const numbers = [2, 3, 4, 5, 9, 11, 15, 17, 23];

for (let num of numbers) {

    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " is a Prime number");
    } else {
        console.log(num + " is not a Prime number");
    }
}