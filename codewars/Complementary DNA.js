function DNAStrand(dna) {
    let newDna = ''

    for (let char of dna) {
        if (char === 'A') {
            newDna += 'T';
        } else if (char === 'T') {
            newDna += 'A';
        } else if (char === 'G') {
            newDna += 'C';
        } else if (char === 'C') {
            newDna += 'G';
        }
    }
    return newDna
}
DNAStrand('ATTGC');