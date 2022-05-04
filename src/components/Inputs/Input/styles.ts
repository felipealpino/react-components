import styled from 'styled-components';
import { IInputProps } from '../../../components/Inputs/Input';
import { colorGet } from '../../../shared/utils/colorGet';

export const InputContainer = styled.div<IInputProps>`
  margin: 0.5rem 0px;

  .container-input-icon {
    position: relative;

    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      right: 0.5rem;
    }

    input {
      width: 100%;
      height: 40px;
      outline: none;
      font-size: 15px;
      font-weight: 500;
      padding: 0.4375rem 1rem;
      border-radius: 4px;
      border: 2px solid ${({ status, error }) => `${colorGet(error ? 'danger' : status, 400)}`};
      background: ${colorGet('basic', 200)};
      transition: 0.1s ease-in-out;
      transition-property: border, background;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    input:focus {
      border: 2px solid ${({ status }) => colorGet(status, 600)};
      background: ${colorGet('basic', 300)};
    }

    input:disabled {
      cursor: not-allowed;
      border: 2px solid ${colorGet('basic', 500)};
    }
  }
`;
