import styled from 'styled-components';
import { ITooltip } from '../../components/Tooltip';
import { colorGet } from '../../shared/utils/colorGet';

type ITooltipProps = ITooltip & {
  show: boolean;
};

export const TooltipContainer = styled.div<ITooltipProps>`
  position: relative;
  font-size: 10px;
  width: fit-content;

  .tooltip-box {
    position: absolute;
    font-size: 14px;
    background: ${({ status }) => colorGet(status, 500)};
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    display: none;
    z-index: 4;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);

    /* tooltip show bottom  */
    ${({ position }) =>
      position === 'bottom' &&
      `
        top: calc(100% + 5px)};
      `}

    /* tooltip show top  */
    ${({ position }) =>
      position === 'top' &&
      `
        bottom: calc(100% + 5px)};
    `}
  }

  .tooltip-box {
    display: ${({ show }) => (show ? 'block' : 'none')};
    width: fit-content;
  }

  .tooltip-arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;

    /* tooltip show bottom  */
    ${({ position, status }) =>
      position === 'bottom' &&
      `
        top: -10px;
        border-color: transparent transparent ${colorGet(status, 500)} transparent;
    `}

    /* tooltip show top  */
    ${({ position, status }) =>
      position === 'top' &&
      `
        bottom: -10px;
        border-color: ${colorGet(status, 500)} transparent transparent  transparent;
    `}
  }
`;
