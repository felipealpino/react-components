var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';
export var SelectContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 15px;\n\n  .select-dropdown {\n    opacity: ", ";\n    border: 2px solid ", ";\n    border-radius: 4px;\n    position: relative;\n    width: 100%;\n  }\n\n  .select-dropdown-header {\n    padding: 15px;\n    cursor: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n    background: ", ";\n\n    svg {\n      margin-left: 10px;\n      width: 25px;\n      height: 25px;\n      transition: 0.2s ease-in-out;\n      transform: rotate(", ");\n    }\n  }\n\n  .select-dropdown-body {\n    padding: 5px;\n    background: ", ";\n    position: ", ";\n    top: 42px;\n    width: inherit;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    z-index: 1;\n    border-top: ", ";\n    border-left: ", ";\n    border-right: ", ";\n    border-bottom: ", ";\n  }\n\n  .select-dropdown-item {\n    padding: 10px;\n  }\n\n  .select-dropdown-item:hover {\n    cursor: pointer;\n  }\n"], ["\n  font-size: 15px;\n\n  .select-dropdown {\n    opacity: ", ";\n    border: 2px solid ", ";\n    border-radius: 4px;\n    position: relative;\n    width: 100%;\n  }\n\n  .select-dropdown-header {\n    padding: 15px;\n    cursor: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n    background: ", ";\n\n    svg {\n      margin-left: 10px;\n      width: 25px;\n      height: 25px;\n      transition: 0.2s ease-in-out;\n      transform: rotate(", ");\n    }\n  }\n\n  .select-dropdown-body {\n    padding: 5px;\n    background: ", ";\n    position: ", ";\n    top: 42px;\n    width: inherit;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    z-index: 1;\n    border-top: ", ";\n    border-left: ", ";\n    border-right: ", ";\n    border-bottom: ", ";\n  }\n\n  .select-dropdown-item {\n    padding: 10px;\n  }\n\n  .select-dropdown-item:hover {\n    cursor: pointer;\n  }\n"])), function (props) { return (props.disabled ? '0.5' : '1'); }, function (_a) {
    var status = _a.status;
    return "" + colorGet(status, 500);
}, function (props) { return (props.disabled ? 'not-allowed' : 'pointer'); }, colorGet('basic', 200), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '90deg' : '0deg');
}, colorGet('basic', 200), function (_a) {
    var optionsFillSpace = _a.optionsFillSpace;
    return (optionsFillSpace ? 'initial' : 'absolute');
}, function (props) { return (!props.optionsFillSpace ? 'none' : "2px solid " + colorGet(props.status, 500)); }, function (props) { return (props.optionsFillSpace ? 'none' : "2px solid " + colorGet(props.status, 500)); }, function (props) { return (props.optionsFillSpace ? 'none' : "2px solid " + colorGet(props.status, 500)); }, function (props) { return (props.optionsFillSpace ? 'none' : "2px solid " + colorGet(props.status, 500)); });
var templateObject_1;
//# sourceMappingURL=styles.js.map