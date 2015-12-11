let expect = require('expect');

const lookAndSay = (str) => {

    let res = '';
    let curr;
    let currCount = 0;

    for (var i = 0; i <= str.length; i++) {
        if (curr === str.charAt(i)) {
            currCount++;
        } else {
            if (currCount > 0) {
                res += currCount + curr;
            }
            currCount = 1;
            curr = str.charAt(i);
        }
    }

    return res;
};

const repeatLookAndSay = (seed, times) => {
    for (var i = times; i > 0; i--) {
        seed = lookAndSay(seed);
    }
    return seed;
};

let result = repeatLookAndSay('3113322113', 50);

console.log('result', result.length);
