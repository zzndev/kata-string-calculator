function stringCalculator(str) {
    let ary = str.split('');
    let sum = 0;
    ary.forEach(value => {
        sum += parseInt(value);
    });
    return sum;
}

module.exports = stringCalculator;