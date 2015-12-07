var fs = require('fs');

let houses = [[2]];

class Santa {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

process.stdout.on('error', function(err){
    if (err.code === 'EPIPE') {
        process.exit(0);
    }
});

let atLeastOne = 1;

const santa = new Santa();
const robo = new Santa();

let currentSanta = null;

function* getSanta() {
    for (var i = 0; i > -1; i++) {
        if (i % 2 === 0) {
            yield santa;
        } else {
            yield robo;
        }
    }
}

fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {

    let santaGen = getSanta();

    for (var i = 0; i < data.length; i++) {
        currentSanta = santaGen.next().value;
        if (data[i] === '^') {
            currentSanta.y++;
        } else if (data[i] === '>') {
            currentSanta.x++;
        } else if (data[i] === 'v') {
            currentSanta.y--;
        } else {
            currentSanta.x--;
        }
        if (!houses[currentSanta.x]) {
            houses[currentSanta.x] = [];
        }
        if (!houses[currentSanta.x][currentSanta.y]) {
            houses[currentSanta.x][currentSanta.y] = 0;
            atLeastOne++;
        }

        houses[currentSanta.x][currentSanta.y]++;
    }
    console.log('at least one', atLeastOne);
});

