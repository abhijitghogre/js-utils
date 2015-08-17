module.exports = function (array, text, value) {
    var selectObj = [];
    var properties = text.split('.');
    var evalString = 'array[i]';
    for (var i = 0; i < properties.length; i++) {
        evalString = evalString + "['" + properties[i] + "']";
    }

    for (var i = 0; i < array.length; i++) {
        selectObj.push({
            text: eval(evalString),
            value: array[i][value]
        });
    }
    cl(array);
    return selectObj;
};