const numbers = [121,123,131,1771];

for(let num of numbers){

    let isPalindrome = true;
    let original = num.toString();
    let reverse = original.split("").reverse().join("");

    if(original != reverse){
        isPalindrome = false;
    }
    if(isPalindrome){
        console.log("The given input is a palindrome: "+ num );
    }
}