/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = (strs) => {
    strs.sort();

    for (let i = 0; i < strs[0].length; i++) {
        console.log(strs[0][i]);
        console.log(strs[strs.length - 1][i]);
        if (strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].slice(0, i);
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(['flight', 'flow', 'flower', 'flashlight']));