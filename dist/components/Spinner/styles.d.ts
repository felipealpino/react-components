import { ISpinner } from '../../components/Spinner';
import { ElementStatus } from '../../shared/theme/colors';
interface ISpinnerBallProps {
    status?: ElementStatus;
    size: string;
}
export declare const SpinnerContainer: import("styled-components").StyledComponent<"div", any, ISpinner, never>;
export declare const SpinnerBall: import("styled-components").StyledComponent<"div", any, ISpinnerBallProps, never>;
export {};
