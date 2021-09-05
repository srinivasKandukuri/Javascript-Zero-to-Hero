// check if given string is palindrome or not

// Ex: civic


function IsPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i])
            return false;
    }
    return true;
}

console.log(IsPalindrome("civic"));


// JS
let str = "civic";
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
    console.log("The string is a palindrome");
} else {
    console.log("NOT a palindrome");
}