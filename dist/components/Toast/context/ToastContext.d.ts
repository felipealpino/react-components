import React from 'react';
import { IToast, IToastOptions } from '../interface/IToast';
export declare type IToastContextData = {
    addToast: (options: IToastOptions) => void;
    toastListCurrent: IToast[];
};
export declare const ToastContext: React.Context<IToastContextData>;
declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
declare function useToast(): IToastContextData;
export { useToast, ToastProvider };
