const numbers = [121,131,133,156,161,171];

for(let num of numbers){
    let isPalindrome = true;
    let original = num.toString();
    let reverse = original.split("").reverse().join("");

    if( original != reverse){
        isPalindrome = false;
    }
    if(isPalindrome){
        console.log(num + " is Palindrome");
    } else {
        console.log(num + " is not Palindrome");
    }
}