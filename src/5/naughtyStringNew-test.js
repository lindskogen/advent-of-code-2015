import expect from 'expect';

import {
    letterPairsAppearsTwiceWithoutOverlap,
    repeatingLetterWithOneBetween,
    stringIsNice
} from './naughtyStringNew';

describe('naughtyStringNew', function() {

    describe('letterPairsAppearsTwiceWithoutOverlap', function() {
        it('should check for letter pairs', function() {
            expect(letterPairsAppearsTwiceWithoutOverlap('qjhvhtzxzqqjkmpb')).toBe(true);
            expect(letterPairsAppearsTwiceWithoutOverlap('aabcdefgaa')).toBe(true);
            expect(letterPairsAppearsTwiceWithoutOverlap('xyxy')).toBe(true);
            expect(letterPairsAppearsTwiceWithoutOverlap('aaa')).toBe(false);
            expect(letterPairsAppearsTwiceWithoutOverlap('xxyxx')).toBe(true);
            expect(letterPairsAppearsTwiceWithoutOverlap('uurcxstgmygtbstg')).toBe(true);

            expect(letterPairsAppearsTwiceWithoutOverlap('uurcxstttmygtb')).toBe(false);
        });
    });

    describe('repeatingLetterWithOneBetween', function() {
        it('should check for repeated letters with one between', function() {
            expect(repeatingLetterWithOneBetween('xyx')).toBe(true);
            expect(repeatingLetterWithOneBetween('abcdefeghi')).toBe(true);
            expect(repeatingLetterWithOneBetween('aaa')).toBe(true);
            expect(repeatingLetterWithOneBetween('uurcxstgmygtbstg')).toBe(false);
        });
    });


    describe('stringIsNice', function() {
        it('should check both repeated letters and letter pairs', function() {
            expect(stringIsNice('qjhvhtzxzqqjkmpb')).toBe(true);
            expect(stringIsNice('xxyxx')).toBe(true);
            expect(stringIsNice('uurcxstgmygtbstg')).toBe(false);
            expect(stringIsNice('ieodomkazucvgmuy')).toBe(false);
        });
    });

});



