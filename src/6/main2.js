import {
    handleParsedInstruction,
    parseInstruction
} from './mistranslation';

import fs from 'fs';


fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {

    let lights = data.split('\n')
        .map(parseInstruction)
        .reduce(handleParsedInstruction, []);


    console.log(JSON.stringify(lights));

    let litLights = lights.reduce((sum, row) =>
        sum + row.reduce((sum, light) => sum + light, 0),
    0);

    console.log('litLights', litLights);
});
