var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
export var ContainerTextArea = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: ", ";\n\n  textarea {\n    box-sizing: border-box;\n    border-radius: 4px;\n    border: 2px solid ", ";\n    outline: none;\n    font-size: 15px;\n    font-weight: 500;\n    padding: 0.4375rem 1rem;\n    background: #f7f9fc;\n    transition: 0.1s ease-in-out;\n    transition-property: border;\n    text-overflow: ellipsis;\n    resize: ", ";\n  }\n\n  textarea:disabled {\n    cursor: not-allowed;\n  }\n\n  span {\n    display: block;\n    color: ", ";\n    font-size: 11px;\n  }\n"], ["\n  opacity: ", ";\n\n  textarea {\n    box-sizing: border-box;\n    border-radius: 4px;\n    border: 2px solid ", ";\n    outline: none;\n    font-size: 15px;\n    font-weight: 500;\n    padding: 0.4375rem 1rem;\n    background: #f7f9fc;\n    transition: 0.1s ease-in-out;\n    transition-property: border;\n    text-overflow: ellipsis;\n    resize: ", ";\n  }\n\n  textarea:disabled {\n    cursor: not-allowed;\n  }\n\n  span {\n    display: block;\n    color: ", ";\n    font-size: 11px;\n  }\n"])), function (props) { return (props.disabled ? '0.5' : '1'); }, function (props) { return colorGet(props.status, 500); }, function (_a) {
    var resizable = _a.resizable;
    return resizable;
}, colorGet('danger', 500));
var templateObject_1;
//# sourceMappingURL=styles.js.map