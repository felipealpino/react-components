var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';
export var SelectContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 15px;\n\n  .select-dropdown {\n    opacity: ", ";\n    border: 2px solid ", ";\n    width: auto;\n    border-radius: 4px;\n    background-color: white;\n\n    position: relative;\n    width: 100%;\n  }\n\n  .select-dropdown-header {\n    padding: 15px;\n    cursor: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    svg {\n      margin-left: 10px;\n      width: 25px;\n      height: 25px;\n      transition: 0.2s ease-in-out;\n      transform: rotate(", ");\n    }\n  }\n\n  .select-dropdown-body {\n    padding: 5px;\n    position: ", ";\n    top: 55px;\n    background: white;\n    width: inherit;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    z-index: 1;\n    border: ", ";\n    border-top: ", ";\n  }\n\n  .select-dropdown-item {\n    padding: 10px;\n  }\n\n  .select-dropdown-item:hover {\n    cursor: pointer;\n  }\n"], ["\n  font-size: 15px;\n\n  .select-dropdown {\n    opacity: ", ";\n    border: 2px solid ", ";\n    width: auto;\n    border-radius: 4px;\n    background-color: white;\n\n    position: relative;\n    width: 100%;\n  }\n\n  .select-dropdown-header {\n    padding: 15px;\n    cursor: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    svg {\n      margin-left: 10px;\n      width: 25px;\n      height: 25px;\n      transition: 0.2s ease-in-out;\n      transform: rotate(", ");\n    }\n  }\n\n  .select-dropdown-body {\n    padding: 5px;\n    position: ", ";\n    top: 55px;\n    background: white;\n    width: inherit;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    z-index: 1;\n    border: ", ";\n    border-top: ", ";\n  }\n\n  .select-dropdown-item {\n    padding: 10px;\n  }\n\n  .select-dropdown-item:hover {\n    cursor: pointer;\n  }\n"])), function (props) { return (props.isDisabled ? '0.5' : '1'); }, function (_a) {
    var status = _a.status;
    return "" + colorGet(status, 500);
}, function (props) { return (props.isDisabled ? 'not-allowed' : 'pointer'); }, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '90deg' : '0deg');
}, function (_a) {
    var optionsFillSpace = _a.optionsFillSpace;
    return (optionsFillSpace ? 'initial' : 'absolute');
}, function (_a) {
    var optionsFillSpace = _a.optionsFillSpace, status = _a.status;
    return (optionsFillSpace ? 'none' : "1px solid " + colorGet(status, 500));
}, function (_a) {
    var optionsFillSpace = _a.optionsFillSpace, status = _a.status;
    return optionsFillSpace && "1px solid " + colorGet(status, 500);
});
var templateObject_1;
//# sourceMappingURL=styles.js.map