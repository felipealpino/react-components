import { ElementStatus } from '../../../shared/theme/colors';
interface ISelectProps {
    isOpen: boolean;
    status: ElementStatus;
    isDisabled?: boolean;
    optionsFillSpace?: boolean;
}
export declare const SelectContainer: import("styled-components").StyledComponent<"div", any, ISelectProps, never>;
export {};
