/**Given an integer x, return true if x is a 
palindrome, and false otherwise.
 */

const isPalindrome = (x) => {
    if (x < 0) return false;

    let reversed = 0;
    let original = x;

    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};
console.log(isPalindrome(121));