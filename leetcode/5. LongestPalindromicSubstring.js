/**
 * Given a string s, return the longest palindromic substring in s.
 */

const expandAroundCenter = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            break;
        }
        left--;
        right++;
    }
    return [left + 1, right];
};

const longestPalindrome = (s) => {
    let max = [0, 1];

    for (let i = 0; i < s.length; i++) {
        const even = expandAroundCenter(i - 1, i, s);
        const odd = expandAroundCenter(i - 1, i + 1, s);
        const currMax = (odd[1] - odd[0] > even[1] - even[0]) ? odd : even;

        max = (max[1] - max[0] > currMax[1] - currMax[0]) ? max : currMax;
    }
    return s.slice(max[0], max[1]);
};

console.log(longestPalindrome("babad"));