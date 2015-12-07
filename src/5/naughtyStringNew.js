export const stringIsNice = (str) => {

    return letterPairsAppearsTwiceWithoutOverlap(str)
        && repeatingLetterWithOneBetween(str);
};

export const letterPairsAppearsTwiceWithoutOverlap = (str) => /(..).*\1/.test(str);

export const repeatingLetterWithOneBetween = (str) => /(.).\1/.test(str);
