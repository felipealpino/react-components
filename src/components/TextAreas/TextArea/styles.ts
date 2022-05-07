import styled from 'styled-components';
import { ITextArea } from '.';
import { colorGet } from '../../../shared/utils';

export const ContainerTextArea = styled.div<Pick<ITextArea, 'resizable' | 'status' | 'disabled'>>`
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  textarea {
    box-sizing: border-box;
    border-radius: 4px;
    border: 2px solid ${(props) => colorGet(props.status, 500)};
    outline: none;
    font-size: 15px;
    font-weight: 500;
    padding: 0.4375rem 1rem;
    background: #f7f9fc;
    transition: 0.1s ease-in-out;
    transition-property: border;
    text-overflow: ellipsis;
    resize: ${({ resizable }) => resizable};
  }

  textarea:disabled {
    cursor: not-allowed;
  }

  span {
    display: block;
    color: ${colorGet('danger', 500)};
    font-size: 11px;
  }
`;
