import { ICheckbox } from '../../../components/Checkboxes/Checkbox';
import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';

export const CheckboxContainer = styled.div<ICheckbox>`
  width: max-content;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .container-input {
      background: ${({ status, disabled }) => (disabled ? colorGet('basic', 300) : colorGet(status, 400))};
      border: 2px solid ${({ status, disabled }) => (disabled ? colorGet('basic', 400) : colorGet(status, 600))};
      width: 30px;
      height: 30px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${({ semiRounded }) => (semiRounded ? '4px' : '0px')};

      
      > svg {
        width: 25px;
        height: 25px;
        color: ${({ status, disabled }) => disabled ? colorGet(status, 400) :  colorGet(status, 900)};
      }

      input[type='checkbox'] {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        background: transparent;
        width: inherit;
        height: inherit;
        margin: 0;
        opacity: 0;
        position: absolute;
      }
    }

    .container-label {
      font-weight: 600;
      font-size: 12px;
      color: #222b45;
    }
  }
`;
