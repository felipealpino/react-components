export interface IBaseFontStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string | number;
    lineHeight: string;
    color?: string;
}
export interface IFonts {
    body: IBaseFontStyle;
    h1?: IBaseFontStyle;
    h2?: IBaseFontStyle;
    h3?: IBaseFontStyle;
    h4?: IBaseFontStyle;
    h5?: IBaseFontStyle;
    h6?: IBaseFontStyle;
    p?: IBaseFontStyle;
    a?: IBaseFontStyle;
    label?: IBaseFontStyle;
    caption?: IBaseFontStyle;
    li?: IBaseFontStyle;
}
export interface IFontWeights {
    light: number;
    normal: number;
    bold: number;
}
export interface IFontSizes {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xlg: string;
    xxlg: string;
}
export interface ILineHeights {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xlg: string;
    xxlg: string;
}
export declare const fonts: IFonts;
export declare const fontWeights: IFontWeights;
