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

  .select-label {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 30px;
    color: ${({ status }) => `${colorGet(status, 500)}`};
    text-transform: unset;
    margin: 4px 0px;
    letter-spacing: 0px;
    font-size: 14px;
    font-weight: 700;
    user-select: none;
    pointer-events: none;

    .mandatory-star {
      color: ${colorGet('danger', 500)};
      font-size: 14px;
      margin-left: 3px;
    }
  }

  .dropdown {
    opacity: ${(props) => (props.isDisabled ? '0.5' : '1')};
    border: 1px solid ${({ status }) => `${colorGet(status, 500)}`};
    width: auto;
    border-radius: 4px;
    background-color: white;

    position: relative;
    width: 100%;
  }

  .dropdown-header {
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

  .dropdown-body {
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

  .dropdown-item {
    padding: 10px;
  }

  .dropdown-item:hover {
    cursor: pointer;
  }
`;
