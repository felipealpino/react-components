export var objectFit = function (fit, position) {
    return "\n        font-family: 'object-fit: " + (fit || 'cover') + ";';\n        object-fit: " + (fit || 'cover') + ";\n        " + (position ? "object-position: " + position + ";" : '') + "\n    ";
};
//# sourceMappingURL=mixins.js.map