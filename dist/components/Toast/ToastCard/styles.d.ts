import { IToast } from '../interface/IToast';
declare type IToastContainer = IToast & {
    shouldShow: boolean;
    numberOfCardsAvailable: number;
};
export declare const ToastCardContainer: import("styled-components").StyledComponent<"div", any, IToastContainer, never>;
export {};
