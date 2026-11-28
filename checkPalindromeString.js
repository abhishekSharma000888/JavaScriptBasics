const original = "abc";
const reverse = original.split("").reverse().join("");

if(original == reverse){
    console.log("The input string is palindrome.");
} else {
    console.log("The input string is not a palindrome.")
}
