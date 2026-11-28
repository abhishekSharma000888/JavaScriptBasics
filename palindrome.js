const numbers = [120,121,131,171,12321,111];
for(let num of numbers){
    isPalindrome = true;
    let original = num.toString();
    let reverse = original.split("").reverse().join("");
    if(original != reverse){
        isPalindrome = false;
    }
    if(isPalindrome){
        console.log(num + " :is Palindrome");
    } else {
        console.log(num + " :is not a Palindrome");
    }
}