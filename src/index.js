const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrayLetters = expr.split('');
    const arrayLettersTen = [];
    const arrayWords = [];
    const arrayMorse = [];
    let wordMorse = '';
    const countTen = 10;
    const countTwo = 2;
    let result = '';
    for (let i = 0, e = countTen; i < arrayLetters.length; i += countTen, e += countTen) {
        arrayLettersTen.push(arrayLetters.slice(i, e));
    }
    for (let i = 0; i < arrayLettersTen.length; i++) {
        arrayWords.push(arrayLettersTen[i].join(''));
    }
    for (let i = 0; i < arrayWords.length; i++) {
        for (let j = 0, e = countTwo; j < arrayWords[i].length; j += countTwo, e += countTwo) {
            let oo = arrayWords[i].slice(j, e);
            if (oo === '00') {
                result += '';
            } else if (oo === '10') {
                result += ".";
            } else if (oo === '11') {
                result += "-";
            } else if (oo === '**') {
                result += " ";
            }
        }
        arrayMorse.push(result);
        result = '';
    }
    for (let i = 0; i < arrayMorse.length; i++) {
        if (MORSE_TABLE[arrayMorse[i]]) {
            wordMorse += MORSE_TABLE[arrayMorse[i]]
        } else {
            wordMorse += " ";
        }
    }
    return wordMorse;
}

module.exports = {
    decode
}