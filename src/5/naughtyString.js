import { readFile } from 'fs';

const stringIsNice = (str) => {
    return containsThreeVowels(str)
        && letterAppearsTwiceInARow(str)
        && !containsNaughtyStrings(str);
};

const VOWELS = 'aeiou';
const containsThreeVowels = (str) => {
    let counter = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        if (VOWELS.includes(str[i])) {
            counter++;
        }
    }
    return counter >= 3;
};

const letterAppearsTwiceInARow = (str) => {
    for (var i = 0, j = 1; j < str.length; i++, j++) {
        if (str[i] === str[j]) {
            return true;
        }
    }
    return false;
};

const NAUGHTY_STRINGS = ['ab', 'cd', 'pq', 'xy'];
const containsNaughtyStrings = (str) => {
    return NAUGHTY_STRINGS.some(naughty => str.includes(naughty));
};


readFile('input', {encoding: 'utf-8'}, function(err, data) {
    let niceStringCount = data.split('\n')
        .map(stringIsNice)
        .filter(isNice => isNice)
        .length
    console.log('niceStringCount', niceStringCount);
});
