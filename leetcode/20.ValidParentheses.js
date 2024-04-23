/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

const isValidParentheses = (s) => {
    const stringStack = [];
   const parenthesesLib = { 
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (parenthesesLib[char]) {
            stringStack.push(char)
        } else {
            const top = stringStack.pop();
            if (parenthesesLib[top] !== char) {
                return false;
            }
        }
    }
    return stringStack.length === 0;
}
console.log(isValidParentheses('[]'));