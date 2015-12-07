var fs = require('fs');

let houses = [[1]];

let [x, y] = [0, 0];

process.stdout.on('error', function(err){
    if (err.code === 'EPIPE') {
        process.exit(0);
    }
});

let atLeastOne = 1;

fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {
    for (var i = 0; i < data.length; i++) {
       if (data[i] === '^') {
            y++;
        } else if (data[i] === '>') {
            x++;
        } else if (data[i] === 'v') {
            y--;
        } else {
            x--;
        }
        if (!houses[x]) {
            houses[x] = [];
        }
        if (!houses[x][y]) {
            houses[x][y] = 0;
            atLeastOne++;
        }

        houses[x][y]++;
    }
    console.log('at least one', atLeastOne);
});

