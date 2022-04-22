import styled from 'styled-components';
import { ElementStatus } from '../../../shared/theme/colors';
import { colorGet } from '../../../shared/utils';

interface ITextArea {
  status?: ElementStatus;
  resizable?: 'both' | 'horizontal' | 'vertical' | 'none';
}

export const ContainerTextArea = styled.div<ITextArea>`
  width: 100%;
  position: relative;

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

  span {
    display: block;
    color: ${colorGet('danger', 500)};
    font-size: 11px;
  }
`;
