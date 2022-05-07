import { ElementStatus } from '../../../shared/theme/colors';
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';

interface ISelectProps {
  isOpen: boolean;
  status: ElementStatus;
  disabled?: boolean;
  optionsFillSpace?: boolean;
}

export const SelectContainer = styled.div<ISelectProps>`
  font-size: 15px;

  .select-dropdown {
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    border: 2px solid ${({ status }) => `${colorGet(status, 500)}`};
    border-radius: 4px;
    position: relative;
    width: 100%;
  }

  .select-dropdown-header {
    padding: 15px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: ${colorGet('basic', 200)};

    svg {
      margin-left: 10px;
      width: 25px;
      height: 25px;
      transition: 0.2s ease-in-out;
      transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
    }
  }

  .select-dropdown-body {
    padding: 5px;
    background: ${colorGet('basic', 200)};
    position: ${({ optionsFillSpace }) => (optionsFillSpace ? 'initial' : 'absolute')};
    top: 42px;
    width: inherit;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 1;
    border-top: ${(props) => (!props.optionsFillSpace ? 'none' : `2px solid ${colorGet(props.status, 500)}`)};
    border-left: ${(props) => (props.optionsFillSpace ? 'none' : `2px solid ${colorGet(props.status, 500)}`)};
    border-right: ${(props) => (props.optionsFillSpace ? 'none' : `2px solid ${colorGet(props.status, 500)}`)};
    border-bottom: ${(props) => (props.optionsFillSpace ? 'none' : `2px solid ${colorGet(props.status, 500)}`)};
  }

  .select-dropdown-item {
    padding: 10px;
  }

  .select-dropdown-item:hover {
    cursor: pointer;
  }
`;
