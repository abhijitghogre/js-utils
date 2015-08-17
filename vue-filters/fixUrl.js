module.exports = function (value) {
    var result;
    if (value.match(/^http/) || value.match(/^https/)) {
        return value;
    }
    else {
        result = '//' + value;
    }

    return result;
};