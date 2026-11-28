const numbers = [1,2,3,0,7,9,171];

for(let num of numbers){
    let isPrime = true;
    if(num <=1){
        isPrime = false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i ==0){
            isPrime = false;
        }
    }

    if(isPrime){
        console.log(num + " :is prime");
    } else{
        console.log(num + " :is not prime");
    }
}