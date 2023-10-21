function alpha(str) {
    var arr = str.split(""); // splits the string
    res = arr.sort().join(""); // sort the array and joins to form a string
    return res; // returns the result
}
console.log("taking mysalary as a string");
console.log(alpha("mysalary"));
// Must take into account the uppercase letters. They are prioritized before normal letters
// 