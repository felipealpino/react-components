var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../shared/utils/colorGet';
import styled from 'styled-components';
export var AccordionContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  background: ", ";\n  min-height: 3rem;\n  width: inherit;\n  opacity: ", ";\n\n  .accordion-header {\n    padding: 0.7rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: ", ";\n  }\n\n  .accordion-info-text {\n    > label {\n      cursor: inherit;\n    }\n  }\n\n  .accordion-icon {\n    transition: 0.2s ease-in-out;\n    transition-property: transform;\n    transform: ", ";\n    display: flex;\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n\n  .accordion-content {\n    overflow: hidden;\n    background: #ffffff;\n    padding: ", ";\n    max-height: ", ";\n    transition-property: max-height, padding;\n    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    transition-duration: 500ms;\n    .accordion-childrens {\n      transition-duration: 300ms;\n      transition-property: visibility, opacity;\n      opacity: ", ";\n      visibility: ", ";\n    }\n  }\n"], ["\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  background: ", ";\n  min-height: 3rem;\n  width: inherit;\n  opacity: ", ";\n\n  .accordion-header {\n    padding: 0.7rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: ", ";\n  }\n\n  .accordion-info-text {\n    > label {\n      cursor: inherit;\n    }\n  }\n\n  .accordion-icon {\n    transition: 0.2s ease-in-out;\n    transition-property: transform;\n    transform: ", ";\n    display: flex;\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n\n  .accordion-content {\n    overflow: hidden;\n    background: #ffffff;\n    padding: ", ";\n    max-height: ", ";\n    transition-property: max-height, padding;\n    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    transition-duration: 500ms;\n    .accordion-childrens {\n      transition-duration: 300ms;\n      transition-property: visibility, opacity;\n      opacity: ", ";\n      visibility: ", ";\n    }\n  }\n"])), function (_a) {
    var status = _a.status;
    return colorGet(status, 400);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? '0.5' : '1');
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (_a) {
    var isOpen = _a.isOpen;
    return "rotate(" + (isOpen ? '-180deg' : '0deg') + ")";
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '1rem 0.7rem' : '0rem 0.7rem');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '1000px' : '0px');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '1' : '0');
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? 'visible' : 'hidden');
});
var templateObject_1;
//# sourceMappingURL=styles.js.map