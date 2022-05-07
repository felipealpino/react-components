export var errorMessageBuilder = function (inputName, errors) {
    var found = errors.find(function (error) { return error.name === inputName; });
    if (found)
        return found.message;
    return undefined;
};
//# sourceMappingURL=errorMessageBuilder.js.map