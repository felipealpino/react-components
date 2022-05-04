var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../utils/colorGet';
export var InputLabelContainer = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: nowrap;\n  color: ", ";\n  text-transform: unset;\n  margin: 4px 0px;\n  font-size: 14px;\n  font-weight: 700;\n  user-select: none;\n  pointer-events: none;\n  display: flex;\n\n  .mandatory-star {\n    color: ", ";\n    font-size: 14px;\n    margin-left: 3px;\n  }\n"], ["\n  white-space: nowrap;\n  color: ", ";\n  text-transform: unset;\n  margin: 4px 0px;\n  font-size: 14px;\n  font-weight: 700;\n  user-select: none;\n  pointer-events: none;\n  display: flex;\n\n  .mandatory-star {\n    color: ", ";\n    font-size: 14px;\n    margin-left: 3px;\n  }\n"])), function (_a) {
    var status = _a.status;
    return "" + colorGet(status, 500);
}, colorGet('danger', 500));
var templateObject_1;
//# sourceMappingURL=styles.js.map