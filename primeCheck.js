const numbers = [1,3,4,8,9,11,13,14];

for(let num of numbers){

    let isPrime = true;
    if(num <=1){
        isPrime = false;
    }
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i==0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(num + " is a prime number");
    }
}