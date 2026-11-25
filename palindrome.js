const numbers = [121,131,321,424,456,111];

let isPalindrome = true;
for(let num of numbers) {
    let original = num.toString();
    let reverse = original.split("").reverse().join("");
    if(original != reverse){
        isPalindrome = false;
    }
    if(isPalindrome){
        console.log("The input is palindrome: "+ num);
    } else{
        console.log("The input is not a palindrome: "+ num);
    }

}