import { colors } from '../theme';
export function getContrastColor(status) {
    if (!status) {
        return colors.primaryContrast;
    }
    var color = status + "Contrast";
    return colors[color] ? "" + colors[color] : colors.primaryContrast;
}
//# sourceMappingURL=getContrastColor.js.map