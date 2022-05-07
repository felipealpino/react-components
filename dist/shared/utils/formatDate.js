export var formatDate = function (date, typeMonth) {
    return new Date(date).toLocaleDateString('pt-br', {
        year: 'numeric',
        month: typeMonth,
        day: 'numeric',
        timeZone: 'UTC'
    });
};
//# sourceMappingURL=formatDate.js.map