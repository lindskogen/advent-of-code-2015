import fs from 'fs';

function* execRegex(str, re) {
    if (re.global) {
        let result;
        while ((result = re.exec(str)) !== null) {
            yield result;
        }
    } else {
        yield re.exec(str);
    }
}



fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {

    const numberRegex = /-?\d+/g;
    let sum = 0;

    for (let match of execRegex(data, numberRegex)) {
        const res = parseInt(match[0], 10);
        console.log(res);
        sum += res;
    }

    console.log(sum);
});