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

function getChar(digitalCode) {
    if (digitalCode === '**********') {
        return ' ';
    }
    let morseCode = '';
    let sequence = '';
    for (let i = 0; i < digitalCode.length; i += 2) {
        const sign = digitalCode.slice(i, i + 2);
        if (sign === '10') {
            sequence += '.';
        } else if (sign === '11') {
            sequence += '-';
        }
    }
    return MORSE_TABLE[sequence];
}

function decode(expr) {
    let message = '';
    for (let i = 0; i < expr.length; i += 10) {
        message += getChar(expr.slice(i, i + 10));
    }
    return message;
}

module.exports = {
    decode
}