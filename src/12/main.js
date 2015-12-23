import fs from 'fs';
import { sumArray } from './traverseSumNotRedNumbers';

fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {

    const obj = JSON.parse(data);

    let sum = sumArray(obj);

    console.log(sum);

});