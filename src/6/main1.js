import {
    handleParsedInstruction,
    parseInstruction
} from './fireHazard';

import fs from 'fs';


fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {

    let lights = data.split('\n')
        .map(parseInstruction)
        .reduce(handleParsedInstruction, []);

    let litLights = lights.reduce((sum, row) =>
        sum + row.filter(light => light).length,
    0);

    console.log('litLights', litLights);
});
