import fs from 'fs';
import expect from 'expect';
import { sumArray, sumObject } from './traverseSumNotRedNumbers';

describe('sumArray', () => {
    it('should handle easy array example', () => {
        const example = [1,2,3];
        expect(sumArray(example)).toEqual(6);
    });

    it('should handle nested array example', () => {
        const example = [[[3]]];
        expect(sumArray(example)).toEqual(3);
    });
    it('should handle array with object example', () => {
        const example = [-1,{"a":1}];
        expect(sumArray(example)).toEqual(0);
    });
    it('should handle empty array', () => {
        const example = [];
        expect(sumArray(example)).toEqual(0);
    });
    it('should handle nested red', () => {
        const example = [1,{"c":"red","b":2},3];
        expect(sumArray(example)).toEqual(4);
    });
    it('should ignore red in array', () => {
        const example = [1,"red",5];
        expect(sumArray(example)).toEqual(6);
    });
});


describe('sumObject', () => {
    it('should handle easy object example', () => {
        const example = {"a":2,"b":4};
        expect(sumObject(example)).toEqual(6);
    });
    it('should handle nested object example', () => {
        const example = {"a":{"b":4},"c":-1};
        expect(sumObject(example)).toEqual(3);
    });
    it('should handle object with array', () => {
        const example = {"a":[-1,1]};
        expect(sumObject(example)).toEqual(0);
    });
    it('should handle empty object', () => {
        const example = {};
        expect(sumObject(example)).toEqual(0);
    });
    it('should handle deep nested red', () => {
        const example = {"d":"red","e":[1,2,3,4],"f":5};
        expect(sumObject(example)).toEqual(0);
    });
});