var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
export var TabContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: ", ";\n  border-bottom: 3px solid ", ";\n  padding: 10px 16px;\n  cursor: ", ";\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-direction: ", ";\n"], ["\n  opacity: ", ";\n  border-bottom: 3px solid ", ";\n  padding: 10px 16px;\n  cursor: ", ";\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-direction: ", ";\n"])), function (props) { return (props.disabled ? '0.5' : '1'); }, colorGet('basic', 400), function (props) { return (props.disabled ? 'not-allowed' : 'pointer'); }, function (_a) {
    var iconposition = _a.iconposition;
    return (iconposition === 'top' || iconposition === 'bottom' ? 'column' : 'row');
});
var templateObject_1;
//# sourceMappingURL=styles.js.map