function rev_num() {
    var num = prompt("Enter the number to be reveresed :", " ");
    var n = num;
    var rev = 0, rem;
    while (n > 0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    console.log("The given number is : " + num + " <br/> The reversed number is : " + rev + "\n");
}

rev_num();