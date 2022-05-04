var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../shared/utils/colorGet';
import styled from 'styled-components';
export var SwipeToggleContainer = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: ", ";\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ", ";\n    border: ", ";\n    border-radius: ", ";\n    transition: 0.6s ease all;\n    opacity: ", ";\n  }\n\n  .center-ball {\n    position: absolute;\n    content: '';\n    height: 28px;\n    width: 28px;\n    background-color: white;\n    transition: 0.4s;\n    border-radius: ", ";\n    margin: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: ", ";\n\n    ", ";\n    ", ";\n    ", ";\n\n    svg {\n      width: 20px;\n      height: 20px;\n      color: ", ";\n    }\n\n    .animated-icon-div {\n      width: 18px;\n      height: 18px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: 0.4;\n\n      .animated-icon {\n        background-color: ", ";\n        height: 1.5px;\n        width: 12px;\n        border-radius: 8px;\n        transform: ", ";\n        position: absolute;\n        right: ", ";\n        transition: 0.4s;\n\n        &::after {\n          content: '';\n          background-color: ", ";\n          position: absolute;\n          height: 1.5px;\n          width: ", ";\n          border-radius: ", ";\n          transform: rotate(90deg);\n          left: ", ";\n          bottom: ", ";\n          transition: 0.4s;\n        }\n      }\n    }\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: ", ";\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ",
    ";\n    border: ",
    ";\n    border-radius: ", ";\n    transition: 0.6s ease all;\n    opacity: ", ";\n  }\n\n  .center-ball {\n    position: absolute;\n    content: '';\n    height: 28px;\n    width: 28px;\n    background-color: white;\n    transition: 0.4s;\n    border-radius: ", ";\n    margin: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: ", ";\n\n    ", ";\n    ", ";\n    ", ";\n\n    svg {\n      width: 20px;\n      height: 20px;\n      color: ", ";\n    }\n\n    .animated-icon-div {\n      width: 18px;\n      height: 18px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: 0.4;\n\n      .animated-icon {\n        background-color: ",
    ";\n        height: 1.5px;\n        width: 12px;\n        border-radius: 8px;\n        transform: ", ";\n        position: absolute;\n        right: ", ";\n        transition: 0.4s;\n\n        &::after {\n          content: '';\n          background-color: ",
    ";\n          position: absolute;\n          height: 1.5px;\n          width: ", ";\n          border-radius: ", ";\n          transform: rotate(90deg);\n          left: ", ";\n          bottom: ", ";\n          transition: 0.4s;\n        }\n      }\n    }\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (_a) {
    var statusCheck = _a.statusCheck, status = _a.status, outline = _a.outline;
    return statusCheck && !outline
        ? colorGet(status, 500)
        : statusCheck && outline
            ? colorGet(status, 400)
            : 'rgba(143, 155, 179, 0.16)';
}, function (_a) {
    var statusCheck = _a.statusCheck, status = _a.status, outline = _a.outline;
    return statusCheck && !outline
        ? "1px solid " + colorGet(status, 500)
        : statusCheck && outline
            ? "1px solid " + colorGet(status, 600)
            : '1px solid rgba(143, 155, 179, 1)';
}, function (_a) {
    var rounded = _a.rounded;
    return (rounded ? '100px' : '4px');
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? '0.6' : '1');
}, function (_a) {
    var rounded = _a.rounded;
    return (rounded ? '100px' : '4px');
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return statusCheck && '-webkit-transform: translateX(20px)';
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return statusCheck && ' -ms-transform: translateX(20px)';
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return statusCheck && 'transform: translateX(20px)';
}, function (_a) {
    var status = _a.status, statusCheck = _a.statusCheck;
    return (statusCheck ? colorGet(status, 500) : colorGet('danger', 500));
}, function (_a) {
    var status = _a.status, statusCheck = _a.statusCheck;
    return statusCheck ? colorGet(status, 500) : colorGet('danger', '500');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return (statusCheck ? 'rotate(-45deg)' : 'rotate(45deg)');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return (statusCheck ? '0px' : 'unset');
}, function (_a) {
    var statusCheck = _a.statusCheck, status = _a.status;
    return statusCheck ? colorGet(status, 500) : colorGet('danger', '500');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return (statusCheck ? '6px' : '12px');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return (statusCheck ? '8px 0px 0px 8px' : '8px');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return (statusCheck ? '-2.2px' : 'unset');
}, function (_a) {
    var statusCheck = _a.statusCheck;
    return (statusCheck ? '3px' : 'unset');
});
var templateObject_1;
//# sourceMappingURL=styles.js.map