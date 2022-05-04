var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../shared/utils/colorGet';
import styled from 'styled-components';
export var SpinnerContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var fixed = _a.fixed;
    return fixed &&
        " \n    position: fixed;\n    inset: 0;\n    background: " + colorGet('basic', 600, true) + ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ";
});
export var SpinnerBall = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* 12sm 16md 24lg 32xl */\n  width: ", ";\n  height: ", ";\n  border: 4px solid ", ";\n  border-top: 4px solid ", ";\n  border-left: 4px solid ", ";\n  border-right: 4px solid ", ";\n  border-radius: 50%;\n  animation: spin 1s cubic-bezier(1, 1, 1, 1) infinite;\n  margin: auto;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  /* 12sm 16md 24lg 32xl */\n  width: ", ";\n  height: ", ";\n  border: 4px solid ", ";\n  border-top: 4px solid ", ";\n  border-left: 4px solid ", ";\n  border-right: 4px solid ", ";\n  border-radius: 50%;\n  animation: spin 1s cubic-bezier(1, 1, 1, 1) infinite;\n  margin: auto;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (_a) {
    var status = _a.status;
    return colorGet(status, 600);
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 300);
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 300);
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 300);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map