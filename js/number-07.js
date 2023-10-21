// First solution
function getVowels(string) {
    let Vowels = 'aAeEiIoOuU';
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log("The Number of vowels in -" +
    " A Computer Science Portal for Geeks:"
    + getVowels("A Computer Science Portal for Geeks"));

// Second solution
function vowelCount(str) {
    const vowelRegex = /[aeiou]/gi;
    const strMatches = str.match(vowelRegex);

    if (strMatches) {
        return strMatches.length;
    } else {
        return 0;
    }
}
const string = "Geeksforgeeks";
const len = vowelCount(string);
console.log("Number of vowels:", len);