import { colors } from '../../shared/theme/colors';
export var colorGet = function (status, statusComplement, isTransparent) {
    if (status === void 0) { status = 'primary'; }
    if (statusComplement === void 0) { statusComplement = ''; }
    return "" + colors["" + status + (isTransparent ? 'Transparent' : '') + statusComplement];
};
//# sourceMappingURL=colorGet.js.map