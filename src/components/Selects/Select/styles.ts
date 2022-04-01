import { ElementStatus } from '../../../shared/theme/colors';
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';

interface ISelectProps {
  isOpen: boolean;
  status: ElementStatus;
}

export const SelectContainer = styled.div<ISelectProps>`
  font-family: sans-serif;
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

  i {
    display: flex;
  }

  .dropdown {
    border: 1px solid ${({ status }) => `${colorGet(status, 500)}`};
    /* width: max-content; */
    width:auto;
    border-radius: 4px;
    background-color: white;
  }

  .dropdown-header {
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-header {
      cursor: pointer;
      margin-left: 10px;
      transition: 0.2s ease-in-out;
      transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
    }
  }

  .dropdown-body {
    padding: 5px;
    border-top: 1px solid ${({ status }) => `${colorGet(status, 500)}`};
  }

  .dropdown-item {
    padding: 10px;
  }

  .dropdown-item:hover {
    cursor: pointer;
  }

  .error {
    i {
      display: flex;
      padding-right: 5px;
    }

    display: flex;
    align-items: center;
    padding-top: 5px;
    color: ${colorGet('danger', 600)};
    font-size: 12px;
    font-weight: 600;
  }
`;
