import styled from 'styled-components';
import { IInputProps } from '../../../components/Inputs/Input';
import { colorGet } from '../../../shared/utils/colorGet';

export const InputContainer = styled.div<IInputProps>`
  color: #2e3a59;
  margin: 0.5rem 0px;

  .input-label {
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

  .container-input-icon {
    position: relative;
  }

  input {
    width: 100%;
    height: 40px;
    outline: none;
    font-size: 15px;
    font-weight: 500;
    padding: 0.4375rem 1rem;
    border-radius: 4px;
    border: 1px solid ${({ status, error }) => `${colorGet(error ? 'danger' : status, 400)}`};
    background: #f7f9fc;
    transition: 0.1s ease-in-out;
    transition-property: border;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  input:focus {
    border: 1px solid ${({ status }) => colorGet(status, 600)};
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid ${colorGet('basic', 500)};
  }

  .icon {
    position: absolute;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: auto;
    text-align: center;
    right: 0;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    aspect-ratio: 1;
    i {
      display: flex;
      svg {
        width: 23px;
        height: 23px;
      }
    }
  }
`;
