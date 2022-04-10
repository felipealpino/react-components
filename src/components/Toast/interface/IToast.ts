import { ElementStatus } from "../../../shared/theme/colors";

export type IToastPositions = 'bottom-right' | 'top-left' | 'bottom-left' | 'top-right';


//@todo juntar essas duas interfaces

export interface IToast {
  id: string;
  handleOnClick: (id: string, toasts: IToast[]) => void;
  className?: string;
  position?: IToastPositions;
  duration?: number;
  status: ElementStatus;
  title: string;
  subtitle?: string;
}

export interface IToastOptions {
  position?: IToastPositions;
  duration?: number;
  status: ElementStatus;
  title: string;
  subtitle?: string;
}
