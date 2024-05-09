function groupingWord(words) {
 
    let frequency = {};

   
    for (let word of words) {
        for (let char of word) {
            if (/[a-zA-Z]/.test(char)) {
                let uppercaseChar = char.toUpperCase();
                if (!frequency[uppercaseChar]) {
                    frequency[uppercaseChar] = 0;
                }
                frequency[uppercaseChar]++;
            }
        }
    }

    let uniqueChars = new Set();
    for (let word of words) {
        for (let char of word) {
            if (/[a-zA-Z]/.test(char)) { 
                uniqueChars.add(char); 
            }
        }
    }

    
    let sortedChars = [...uniqueChars].sort((a, b) => {
      
        let freqDiff = frequency[b.toUpperCase()] - frequency[a.toUpperCase()];
        if (freqDiff === 0) {
      
            return a.localeCompare(b);
        }
        return freqDiff;
    });

    let result = sortedChars.join('');
    return result;
}

let words = ['Pendanaan', 'Terporteksi', 'Untuk', 'Dampak', 'Berarti'];
console.log(groupingWord(words));

