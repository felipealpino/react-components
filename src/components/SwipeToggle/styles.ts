import { colorGet } from '../../shared/utils/colorGet';
import { ISwipeToggle } from '../../components/SwipeToggle';
import styled from 'styled-components';

type ISwipeToggleProps = ISwipeToggle & {
  statusCheck: boolean;
};

export const SwipeToggleContainer = styled.label<ISwipeToggleProps>`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ statusCheck, status, outline }) =>
      statusCheck && !outline
        ? colorGet(status, 500)
        : statusCheck && outline
        ? colorGet(status, 400)
        : 'rgba(143, 155, 179, 0.16)'};
    border: ${({ statusCheck, status, outline }) =>
      statusCheck && !outline
        ? `1px solid ${colorGet(status, 500)}`
        : statusCheck && outline
        ? `1px solid ${colorGet(status, 600)}`
        : '1px solid rgba(143, 155, 179, 1)'};
    border-radius: ${({ rounded }) => (rounded ? '100px' : '4px')};
    transition: 0.6s ease all;
    opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  }

  .center-ball {
    position: absolute;
    content: '';
    height: 28px;
    width: 28px;
    background-color: white;
    transition: 0.4s;
    border-radius: ${({ rounded }) => (rounded ? '100px' : '4px')};
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }

    ${({ statusCheck }) => statusCheck && '-webkit-transform: translateX(20px)'};
    ${({ statusCheck }) => statusCheck && ' -ms-transform: translateX(20px)'};
    ${({ statusCheck }) => statusCheck && 'transform: translateX(20px)'};

    i {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: ${({ status, statusCheck }) => (statusCheck ? colorGet(status, 500) : colorGet('danger', 500))};
      }
    }

    .animated-icon-div {
      width: 18px;
      height: 18px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4;

      .animated-icon {
        background-color: ${({ status, statusCheck }) =>
          statusCheck ? colorGet(status, 500) : colorGet('danger', '500')};
        height: 1.5px;
        width: 12px;
        border-radius: 8px;
        transform: ${({ statusCheck }) => (statusCheck ? 'rotate(-45deg)' : 'rotate(45deg)')};
        position: absolute;
        right: ${({ statusCheck }) => (statusCheck ? '0px' : 'unset')};
        transition: 0.4s;

        &::after {
          content: '';
          background-color: ${({ statusCheck, status }) =>
            statusCheck ? colorGet(status, 500) : colorGet('danger', '500')};
          position: absolute;
          height: 1.5px;
          width: ${({ statusCheck }) => (statusCheck ? '6px' : '12px')};
          border-radius: ${({ statusCheck }) => (statusCheck ? '8px 0px 0px 8px' : '8px')};
          transform: rotate(90deg);
          left: ${({ statusCheck }) => (statusCheck ? '-2.2px' : 'unset')};
          bottom: ${({ statusCheck }) => (statusCheck ? '3px' : 'unset')};
          transition: 0.4s;
        }
      }
    }
  }
`;
