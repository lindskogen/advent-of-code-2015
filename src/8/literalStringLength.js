import fs from 'fs';


fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {

    let lines = data.split('\n')
        .map(line => ([literalStringLength(line), stringLength(line)]))
        .reduce(([s1, s2], [l1, l2]) => {
            return [s1 + l1, s2 + l2];
        }, [0, 0]);

    let [sumLiteral, sumExpanded] = lines;

    console.log(sumExpanded - sumLiteral);
});


const literalStringLength = (str) => str.length;

const stringLength = (str) => {
    return ('"' +
        str.replace(/\\/g, '\\\\')
           .replace(/"/g, '\\"')
        + '"')
    .length;
};
