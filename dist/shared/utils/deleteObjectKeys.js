export var deleteObjectKeys = function (obj, keys) {
    keys.forEach(function (key) { return delete obj[key]; });
    return obj;
};
//# sourceMappingURL=deleteObjectKeys.js.map