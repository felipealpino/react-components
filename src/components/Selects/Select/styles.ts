import { ElementStatus } from '../../../shared/theme/colors';
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';

interface ISelectProps {
  isOpen: boolean;
  status: ElementStatus;
  isDisabled?: boolean;
}

export const SelectContainer = styled.div<ISelectProps>`
  font-size: 15px;

  .select-dropdown {
    opacity: ${(props) => (props.isDisabled ? '0.5' : '1')};
    border: 1px solid ${({ status }) => `${colorGet(status, 500)}`};
    width: auto;
    border-radius: 4px;
    background-color: white;

    position: relative;
    width: 100%;
  }

  .select-dropdown-header {
    padding: 15px;
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    position: absolute;
    top: 55px;
    background: white;
    border: 1px solid ${({ status }) => `${colorGet(status, 500)}`};
    width: inherit;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 1;
  }

  .select-dropdown-item {
    padding: 10px;
  }

  .select-dropdown-item:hover {
    cursor: pointer;
  }
`;
