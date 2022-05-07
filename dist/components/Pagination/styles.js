var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../shared/utils/colorGet';
export var PaginationContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n\n  .pagination-content {\n    display: flex;\n\n    span {\n      margin: auto;\n      font-weight: 700;\n    }\n\n    .pagination-content-icon {\n      cursor: pointer;\n      margin: 0px 10px;\n      transition: background-color 0.1s ease-in-out;\n      background-color: ", ";\n      border-radius: ", ";\n      display: flex;\n      transition: 0.1s ease-in-out;\n\n      svg {\n        width: 25px;\n        height: 25px;\n        color: ", ";\n      }\n\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n\n  ", "\n\n  ", "\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n\n  .pagination-content {\n    display: flex;\n\n    span {\n      margin: auto;\n      font-weight: 700;\n    }\n\n    .pagination-content-icon {\n      cursor: pointer;\n      margin: 0px 10px;\n      transition: background-color 0.1s ease-in-out;\n      background-color: ", ";\n      border-radius: ", ";\n      display: flex;\n      transition: 0.1s ease-in-out;\n\n      svg {\n        width: 25px;\n        height: 25px;\n        color: ", ";\n      }\n\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var status = _a.status;
    return colorGet(status, 500);
}, function (_a) {
    var rounded = _a.rounded;
    return (rounded ? '15px' : '4px');
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 'Contrast');
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 600);
}, function (_a) {
    var isFirstPage = _a.isFirstPage;
    return isFirstPage &&
        "\n    .pagination-content-icon.back {\n      opacity: 0.3;\n    }\n  \n  ";
}, function (_a) {
    var isLastPage = _a.isLastPage;
    return isLastPage &&
        "\n    .pagination-content-icon.forward {\n      opacity: 0.3;\n    }\n  \n  ";
});
var templateObject_1;
//# sourceMappingURL=styles.js.map