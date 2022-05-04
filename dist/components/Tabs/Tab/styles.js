var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
export var TabContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: 3px solid ", ";\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-direction: ", ";\n"], ["\n  border-bottom: 3px solid ", ";\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-direction: ", ";\n"])), colorGet('basic', 400), function (_a) {
    var iconposition = _a.iconposition;
    return (iconposition === 'top' || iconposition === 'bottom' ? 'column' : 'row');
});
var templateObject_1;
//# sourceMappingURL=styles.js.map