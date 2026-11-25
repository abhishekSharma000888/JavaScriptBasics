const numbers = [1,2,3,4,5,67,77,79];
for(let num of numbers){
    isPrime=true;
    if(num <=1){
        console.log("The number should be greater than 1 to validate eligibility to be a prime");
        isPrime = false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("The number is Prime: "+ num);
    } else {
        console.log("The number is not Prime: "+ num);
    }

}