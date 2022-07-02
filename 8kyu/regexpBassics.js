String.prototype.digit = function () {
    const pattern = /^[0-9]$/
    return pattern.test(this);
};

//https://www.codewars.com/kata/567bf4f7ee34510f69000032