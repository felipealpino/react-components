import { colors } from './colors';

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

export const fonts: IFonts = {
  body: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '0.9375rem',
    color: colors.basic1000,
    fontWeight: 400,
    lineHeight: '3rem',
  },
  h1: {
    fontFamily: 'inherit',
    fontSize: '2.25rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
  h2: {
    fontFamily: 'inherit',
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: '2.5rem',
  },
  h3: {
    fontFamily: 'inherit',
    fontSize: '1.875rem',
    fontWeight: 700,
    lineHeight: '2.5rem',
  },
  h4: {
    fontFamily: 'inherit',
    fontSize: '1.625rem',
    fontWeight: 700,
    lineHeight: '2rem',
  },
  h5: {
    fontFamily: 'inherit',
    fontSize: '1.375rem',
    fontWeight: 700,
    lineHeight: '2rem',
  },
  h6: {
    fontFamily: 'inherit',
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: '1.5em',
  },
  p: {
    fontFamily: 'inherit',
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
  a: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: colors.primary500,
  },
  label: {
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
  caption: {
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
  li: {
    fontFamily: 'inherit',
    fontSize: '0.9375rem',
    color: colors.basic100,
    fontWeight: 400,
    lineHeight: '1.25rem',
  },
};

export const fontWeights: IFontWeights = {
  light: 300,
  normal: 400,
  bold: 600,
};
