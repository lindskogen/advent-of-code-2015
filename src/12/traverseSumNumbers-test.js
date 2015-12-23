import fs from 'fs';
import expect from 'expect';
import { sumArray, sumObject } from './traverseSumNumbers';

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
});