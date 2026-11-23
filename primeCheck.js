const numbers = [1,2,17,19,424,24242131,8,7];

for(let num of numbers ){
    let isPrime = true;

    if(num <=1){
        console.log("The number is not prime: " + num);
    }

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i ==0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("The number is prime: "+ num);
    }
}