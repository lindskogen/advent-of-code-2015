export const sumValue = (obj) => {
    if (Array.isArray(obj)) {
        return sumArray(obj);
    } else if ('number' === typeof obj) {
        return obj;
    } else {
        return sumObject(obj);
    }
};

const addition = (sum, elem) => sum + elem;


export const sumObject = (obj) => {
    return Object.keys(obj).map(key => sumValue(obj[key])).reduce(addition, 0);
};

export const sumArray = (arr) => {
    return arr.map(sumValue).reduce(addition, 0);
};