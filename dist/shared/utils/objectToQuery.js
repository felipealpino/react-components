export var objectToQuery = function (obj, shouldStringfy) {
    var str = [];
    for (var key in obj)
        if (obj[key] && obj[key] !== undefined && obj[key] !== null) {
            if (shouldStringfy)
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(obj[key])));
            else
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    return str.join('&');
};
//# sourceMappingURL=objectToQuery.js.map