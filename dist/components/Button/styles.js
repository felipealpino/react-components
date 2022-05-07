var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { colorGet } from '../../shared/utils/colorGet';
import styled from 'styled-components';
export var ButtonContainer = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  all: none;\n  border: none;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  color: #ffffff;\n  padding: 10px 15px;\n  font-weight: 600;\n  font-size: 16px;\n  transition: 0.1s ease-in-out;\n  transition-property: background;\n  min-width: 110px;\n  width: fit-content;\n  height: max-content;\n  min-height: 50px;\n  user-select: none;\n\n  background: ", ";\n  cursor: ", ";\n  border: 2px solid ", ";\n  opacity: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"], ["\n  all: none;\n  border: none;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  color: #ffffff;\n  padding: 10px 15px;\n  font-weight: 600;\n  font-size: 16px;\n  transition: 0.1s ease-in-out;\n  transition-property: background;\n  min-width: 110px;\n  width: fit-content;\n  height: max-content;\n  min-height: 50px;\n  user-select: none;\n\n  background: ", ";\n  cursor: ", ";\n  border: 2px solid ", ";\n  opacity: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"])), function (_a) {
    var status = _a.status, outline = _a.outline;
    return (outline ? colorGet(status, 300) : colorGet(status, 500));
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (_a) {
    var status = _a.status;
    return colorGet(status, 500);
}, function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? '1' : '0.5');
}, function (_a) {
    var status = _a.status, disabled = _a.disabled;
    return !disabled && colorGet(status, 600);
});
var templateObject_1;
//# sourceMappingURL=styles.js.map