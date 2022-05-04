export interface IInput {
    fontSize: string;
    fontWeight: number | string;
    lineHeight: string;
    placeholderFontSize: string;
    placeholderFontWeight: number | string;
    placeholderLineHeight: string;
    padding: string;
    maxWidht: string;
}
export interface IFormElements {
    input: {
        padding: string;
        floatingLabel: string;
    };
    inputs: {
        tiny: IInput;
        small: IInput;
        medium: IInput;
        large: IInput;
        giant: IInput;
    };
    checkbox: {
        border: string;
        borderRadius: string;
        sizes?: {
            [key: string]: object;
        };
    };
    fileInput: {
        backgroundColor: string;
        color: string;
    };
    radio: {
        border: string;
        borderRadius: string;
        sizes?: {
            [key: string]: object;
        };
    };
}
export declare const formElements: IFormElements;
