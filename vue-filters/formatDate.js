module.exports = function (date) {
    var ts = Date.parse(date);
    return DateFormat.format.date(ts, 'd MMM yyyy (ddd)');
};