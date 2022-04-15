import { ElementStatus } from '../../../shared/theme/colors';
interface ITextArea {
    status?: ElementStatus;
    resizable?: 'both' | 'horizontal' | 'vertical' | 'none';
}
export declare const ContainerTextArea: import("styled-components").StyledComponent<"div", any, ITextArea, never>;
export {};
