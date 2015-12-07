import {stringIsNice as stringIsNice } from './naughtyString';
import {stringIsNice as stringIsNice2 } from './naughtyStringNew';
import fs from 'fs';


fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {
    let niceStringCount = data.split('\n')
        .map(stringIsNice)
        .filter(isNice => isNice)
        .length;

    console.log('niceStringCount', niceStringCount);
});
