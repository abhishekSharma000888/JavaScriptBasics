const numbers = [121,123,131,1771];

for(let num of numbers){

    let isPalindrome = true;
    let original = num.toString();
    let reverse = original.split("").reverse().join("");

    if(original != reverse){
        isPalindrome = false;
    }
    if(isPalindrome){
        console.log(num + " is Palindrome");
    } else {
        console.log(num + " Is not a Palindrome");
    }
}