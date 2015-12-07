const COORDS_REGEX = /(\d+),(\d+) through (\d+),(\d+)/;

export const parseInstruction = (str) => {
    let res = COORDS_REGEX.exec(str);
    let from = [
        parseInt(res[1], 10),
        parseInt(res[2], 10)
    ];
    let to = [
        parseInt(res[3], 10),
        parseInt(res[4], 10)
    ];

    let command;

    if (str.startsWith('turn on')) {
        command = 'on';
    } else if (str.startsWith('turn off')) {
        command = 'off';
    } else {
        command = 'toggle';
    }

    return {
        from,
        to,
        command
    };
};

const execCommand = (prevValue, command) => {
    switch (command) {
        case 'on':
            return true;
        case 'off':
            return false;
        case 'toggle':
            return !prevValue;
    }
};


export const handleParsedInstruction = (lights, { from: [fx, fy], to: [tx, ty], command }) => {
    // console.log([fx, fy], [tx, ty], command);

    for (var i = fx; i <= tx; i++) {
        for (var j = fy; j <= ty; j++) {
            if (!lights[i]) {
                lights[i] = [];
            }
            lights[i][j] = execCommand(lights[i][j], command);
        }
    }
    return lights;
};
