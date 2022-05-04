import { IToast } from '../interface/IToast';
declare type IToastContainer = IToast & {
    shouldShow: boolean;
    myIndexInArray: number;
    timeToUnmount: number;
};
export declare const ToastCardContainer: import("styled-components").StyledComponent<"div", any, IToastContainer, never>;
export {};
