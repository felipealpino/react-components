var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils/colorGet';
export var InputContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0.5rem 0px;\n\n  .container-input-icon {\n    position: relative;\n\n    svg {\n      width: 20px;\n      height: 20px;\n      position: absolute;\n      z-index: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 0.5rem;\n    }\n\n    input {\n      width: 100%;\n      height: 40px;\n      outline: none;\n      font-size: 15px;\n      font-weight: 500;\n      padding: 0.4375rem 1rem;\n      border-radius: 4px;\n      border: 2px solid ", ";\n      background: ", ";\n      transition: 0.1s ease-in-out;\n      transition-property: border, background;\n      text-overflow: ellipsis;\n      -webkit-box-orient: vertical;\n    }\n\n    input:focus {\n      border: 2px solid ", ";\n      background: ", ";\n    }\n\n    input:disabled {\n      cursor: not-allowed;\n      border: 2px solid ", ";\n    }\n  }\n"], ["\n  margin: 0.5rem 0px;\n\n  .container-input-icon {\n    position: relative;\n\n    svg {\n      width: 20px;\n      height: 20px;\n      position: absolute;\n      z-index: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 0.5rem;\n    }\n\n    input {\n      width: 100%;\n      height: 40px;\n      outline: none;\n      font-size: 15px;\n      font-weight: 500;\n      padding: 0.4375rem 1rem;\n      border-radius: 4px;\n      border: 2px solid ", ";\n      background: ", ";\n      transition: 0.1s ease-in-out;\n      transition-property: border, background;\n      text-overflow: ellipsis;\n      -webkit-box-orient: vertical;\n    }\n\n    input:focus {\n      border: 2px solid ", ";\n      background: ", ";\n    }\n\n    input:disabled {\n      cursor: not-allowed;\n      border: 2px solid ", ";\n    }\n  }\n"])), function (_a) {
    var status = _a.status, error = _a.error;
    return "" + colorGet(error ? 'danger' : status, 400);
}, colorGet('basic', 200), function (_a) {
    var status = _a.status;
    return colorGet(status, 600);
}, colorGet('basic', 300), colorGet('basic', 500));
var templateObject_1;
//# sourceMappingURL=styles.js.map