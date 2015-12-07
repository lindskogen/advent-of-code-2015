var fs = require('fs');

const smallestSide = (l, w, h) => Math.min(l*w, w*h, h*l);

function areaOfBox(l, w, h) {
    var boxTotalArea = 2*l*w + 2*w*h + 2*h*l;

    return boxTotalArea + smallestSide(l, w, h);
}

var totalArea = 0;

process.stdout.on('error', function(err){
    if (err.code === 'EPIPE') {
        process.exit(0);
    }
});

const parseDimensionString = (str) => str.split('x').map((d) => parseInt(d));


fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {
    data.split('\n').forEach((line) => {
        let dimensions = parseDimensionString(line);
        let area = areaOfBox(...dimensions);
        totalArea += area;
        console.log('area: ', area, ' totalArea: ', totalArea);
    });
});

