// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }


// let n = 10;
// console.log("Fibonacci number " + n + " is: " + fibonacci(n));

function isPalindrome(str) {
    function cleanString(s) {
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }

    function checkPalindrome(cleanedStr, start, end) {
        if (start >= end) {
            return true;
        }
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        return checkPalindrome(cleanedStr, start + 1, end - 1);
    }

    const cleanedStr = cleanString(str);
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

const inputStr = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputStr));
