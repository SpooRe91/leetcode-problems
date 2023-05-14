var reverseVowels = function (s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const letters = s.split('');

    let i = 0;
    let j = letters.length - 1;

    while (i < j) {
        let left = letters[i];
        let right = letters[j];

        if (!vowels.has(left)) {
            i++;
        } else if (!vowels.has(right)) {
            j--;
        } else {
            letters[i] = right;
            i++;
            letters[j] = left;
            j--;
        }
    }
    return letters.join('');
}
reverseVowels('leetcode')