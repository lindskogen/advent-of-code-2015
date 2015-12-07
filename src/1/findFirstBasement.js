var fs = require('fs');


var floor = 0;

process.stdout.on('error', function(err){
    if (err.code === 'EPIPE') {
        process.exit(0);
    }
});

fs.readFile('input', {encoding: 'utf-8'}, function(err, data) {
    for (var i = 0; i < data.length; i++) {
       if (data[i] === '(') {
            floor++;
        } else {
            floor--;
        }
        console.log('Move to floor ', floor, ' position: ', i + 1);
    }
});

