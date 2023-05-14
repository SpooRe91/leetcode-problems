function duplicateEncode(word) {
    const wordArr = [...word.toLowerCase()];

    return wordArr.map((el, index, arr) => {
        return (
            arr.indexOf(el) === arr.lastIndexOf(el)
                ? '('
                : ')'
        )
    }).join('');
}
console.log((duplicateEncode('Success')));