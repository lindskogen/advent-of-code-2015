import { md5 } from 'blueimp-md5';


const puzzelInput = 'iwrupvqb';


const startsWithZeros = (str) => str.startsWith('00000');


for (var i = 0; i >= 0; i++) {
    let input = puzzelInput + i;
    let result = md5(input);
    if (startsWithZeros(result)) {
        console.log(i, puzzelInput, input, result);
        break;
    }
}
