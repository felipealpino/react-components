var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
export var TabsContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n\n  .tab-options-list {\n    min-height: 50px;\n    font-weight: 600;\n    user-select: none;\n    display: flex;\n    overflow-x: auto;\n    padding-bottom: 2px;\n    justify-content: ", ";\n  }\n\n  .selected {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n\n    svg {\n      color: ", " !important;\n    }\n  }\n\n  .rendered-components-container {\n    .rendered-tab {\n      display: none;\n    }\n\n    .rendered-tab.--show {\n      display: block;\n    }\n  }\n"], ["\n  background: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n\n  .tab-options-list {\n    min-height: 50px;\n    font-weight: 600;\n    user-select: none;\n    display: flex;\n    overflow-x: auto;\n    padding-bottom: 2px;\n    justify-content: ", ";\n  }\n\n  .selected {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n\n    svg {\n      color: ", " !important;\n    }\n  }\n\n  .rendered-components-container {\n    .rendered-tab {\n      display: none;\n    }\n\n    .rendered-tab.--show {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var tabsPosition = _a.tabsPosition;
    return tabsPosition;
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 600);
}, function (_a) {
    var status = _a.status;
    return status && colorGet(status, 600);
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 600);
});
var templateObject_1;
//# sourceMappingURL=styles.js.map