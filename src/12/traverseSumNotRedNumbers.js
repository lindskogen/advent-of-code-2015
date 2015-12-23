export const sumValue = (obj) => {
    if (Array.isArray(obj)) {
        return sumArray(obj);
    } else if ('number' === typeof obj) {
        return obj;
    } else if ('string' === typeof obj){
        return 0;
    } else {
        console.log(obj);
        return sumObject(obj);
    }
};

const addition = (sum, elem) => sum + elem;


export const sumObject = (obj) => {
    const keys = Object.keys(obj);
    const values = keys.map(k => obj[k]);

    if (values.indexOf('red') !== -1) {
        return 0;
    } else {
        return keys.map(key => sumValue(obj[key])).reduce(addition, 0);
    }
};

export const sumArray = (arr) => {
    return arr.map(sumValue).reduce(addition, 0);
};