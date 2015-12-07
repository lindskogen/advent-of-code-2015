var fs = require('fs');

const volume = (l, w, h) => l*w*h;

function areaOfBox(s1, s2, s3) {
    var shortestDist = s1+s1+s2+s2;

    return shortestDist + volume(s1, s2, s3);
}

var totalLength = 0;

process.stdout.on('error', function(err){
    if (err.code === 'EPIPE') {
        process.exit(0);
    }
});

const parseDimensionString = (str) => str.split('x').map((d) => parseInt(d, 10));

fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {
    data.split('\n').forEach((line) => {
        let dimensions = parseDimensionString(line);
        dimensions.sort((a, b) => a - b);

        let area = areaOfBox(...dimensions);
        totalLength += area;
        console.log(line, dimensions.join('x'), 'area:', area, 'totalArea:', totalLength);
    });
});

