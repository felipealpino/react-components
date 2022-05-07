var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';
export var CheckboxContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: max-content;\n\n  > div {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    opacity: ", ";\n\n    .container-input {\n      background: ", ";\n      border: 2px solid ", ";\n      width: 30px;\n      height: 30px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: ", ";\n\n      > svg {\n        width: 25px;\n        height: 25px;\n        color: ", ";\n      }\n\n      input[type='checkbox'] {\n        cursor: ", ";\n        background: transparent;\n        width: inherit;\n        height: inherit;\n        margin: 0;\n        opacity: 0;\n        position: absolute;\n      }\n    }\n  }\n"], ["\n  width: max-content;\n\n  > div {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    opacity: ", ";\n\n    .container-input {\n      background: ", ";\n      border: 2px solid ", ";\n      width: 30px;\n      height: 30px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: ", ";\n\n      > svg {\n        width: 25px;\n        height: 25px;\n        color: ", ";\n      }\n\n      input[type='checkbox'] {\n        cursor: ", ";\n        background: transparent;\n        width: inherit;\n        height: inherit;\n        margin: 0;\n        opacity: 0;\n        position: absolute;\n      }\n    }\n  }\n"])), function (props) { return (props.disabled ? '0.5' : '1'); }, function (_a) {
    var status = _a.status;
    return colorGet(status, 400);
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 600);
}, function (_a) {
    var semiRounded = _a.semiRounded;
    return (semiRounded ? '4px' : '0px');
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 900);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
});
var templateObject_1;
//# sourceMappingURL=styles.js.map