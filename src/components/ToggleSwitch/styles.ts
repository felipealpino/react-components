import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { IToggleSwitchProps } from './index';

interface IStyledIToggleSwitchProps extends IToggleSwitchProps {
  statusCheck: boolean;
}

export const StyledToggleSwitchContainer = styled.label<IStyledIToggleSwitchProps>`
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
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) =>
      props.statusCheck && !props.outline
        ? themeGet(`colors.${props.status}500`)
        : props.statusCheck && props.outline
        ? themeGet(`colors.${props.status}400`)
        : 'rgba(143, 155, 179, 0.16)'};
    border: ${(props) =>
      props.statusCheck && !props.outline
        ? `1px solid ${themeGet(`colors.${props.status}500`)(props)}`
        : props.statusCheck && props.outline
        ? `1px solid ${themeGet(`colors.${props.status}600`)(props)}`
        : '1px solid rgba(143, 155, 179, 1)'};
    border-radius: ${(props) => (props.rounded ? '100px' : '4px')};
    transition: 0.6s ease all;
  }

  .center-ball {
    position: absolute;
    content: '';
    height: 28px;
    width: 28px;
    background-color: white;
    transition: 0.4s;
    border-radius: ${(props) => (props.rounded ? '50%' : '4px')};
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    }

    ${(props) => props.statusCheck && '-webkit-transform: translateX(20px)'};
    ${(props) => props.statusCheck && ' -ms-transform: translateX(20px)'};
    ${(props) => props.statusCheck && 'transform: translateX(20px)'};

    i {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: ${(props) => (props.statusCheck ? themeGet(`colors.${props.status}500`) : themeGet('colors.danger500'))};
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
        background-color: ${(props) =>
          props.statusCheck ? themeGet(`colors.${props.status}500`) : themeGet('colors.danger500')};
        height: 1.5px;
        width: 12px;
        border-radius: 8px;
        transform: ${(props) => (props.statusCheck ? 'rotate(-45deg)' : 'rotate(45deg)')};
        position: absolute;
        right: ${(props) => (props.statusCheck ? '0px' : 'unset')};
        transition: 0.4s;

        &::after {
          content: '';
          background-color: ${(props) =>
            props.statusCheck ? themeGet(`colors.${props.status}500`) : themeGet('colors.danger500')};
          position: absolute;
          height: 1.5px;
          width: ${(props) => (props.statusCheck ? '6px' : '12px')};
          border-radius: ${(props) => (props.statusCheck ? '8px 0px 0px 8px' : '8px')};
          transform: rotate(90deg);
          left: ${(props) => (props.statusCheck ? '-2.2px' : 'unset')};
          bottom: ${(props) => (props.statusCheck ? '3px' : 'unset')};
          transition: 0.4s;
        }
      }
    }
  }
`;
