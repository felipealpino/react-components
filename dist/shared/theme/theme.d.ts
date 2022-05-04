import { IColors } from './colors';
import { IFormElements } from './form-elements';
import { IFonts, IFontWeights } from './typography';
import { DefaultTheme } from 'styled-components';
export declare const theme: IDefaultTheme;
export declare type ElementSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export declare type ElementPosition = 'top-right' | 'bottom-right' | 'top-left' | 'top-bottom' | 'bottom-top' | 'bottom-left';
export interface IDefaultTheme extends DefaultTheme {
    borders: Array<number | string>;
    colors: IColors;
    formElements: IFormElements;
    gridColumns: number;
    breakpoints: {
        [key: string]: string;
    };
    media: {
        [key: string]: string;
    };
    fonts: IFonts;
    fontWeights: IFontWeights;
    siteMaxWidth: string;
    maxWidths: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    radii: string[];
    shadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    space: string[];
    accordionSizes: {
        tiny: {
            minHeight: string;
        };
        small: {
            minHeight: string;
        };
        medium: {
            minHeight: string;
        };
        large: {
            minHeight: string;
        };
        giant: {
            minHeight: string;
        };
    };
    buttonSizes: {
        tiny: {
            fontSize: string;
            padding: string;
            lineHeight: string;
        };
        small: {
            fontSize: string;
            padding: string;
            lineHeight: string;
        };
        medium: {
            fontSize: string;
            padding: string;
            lineHeight: string;
        };
        large: {
            fontSize: string;
            padding: string;
            lineHeight: string;
        };
        giant: {
            fontSize: string;
            padding: string;
            lineHeight: string;
        };
    };
    cardSizes: {
        tiny: {
            height: string;
        };
        small: {
            height: string;
        };
        medium: {
            height: string;
        };
        large: {
            height: string;
        };
        giant: {
            height: string;
        };
    };
    spinnerSizes: {
        tiny: {
            fontSize: string;
        };
        small: {
            fontSize: string;
        };
        medium: {
            fontSize: string;
        };
        large: {
            fontSize: string;
        };
        giant: {
            fontSize: string;
        };
    };
    modalSizes: {
        sm: object;
        md: object;
        lg: object;
    };
    wysiwyg: {
        maxWidth: string;
        tightness: {
            tight: object;
            default: object;
            loose: object;
        };
    };
}
