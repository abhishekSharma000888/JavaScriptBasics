const str = "Automation Testing";
let vowels = 0;
let consonants = 0;
for (const ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        vowels++;
    } else if (ch >= "a" && ch <= "z") {
        consonants++;
    }
}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
