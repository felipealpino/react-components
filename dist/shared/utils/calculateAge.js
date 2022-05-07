// birthdate must has the format yyyy-mm-dd
export var calcAge = function (birthdate) {
    var age = Math.floor((Date.now() - +new Date("" + birthdate.split('-').join('/'))) / 31557600000);
    if (isNaN(age) || age < 0)
        return '';
    return age;
};
//# sourceMappingURL=calculateAge.js.map