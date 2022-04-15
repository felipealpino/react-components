import styled from 'styled-components';
import { ElementStatus } from '../../../shared/theme/colors';
import { colorGet } from '../../../shared/utils';

interface ITextArea {
  status?: ElementStatus;
}

export const ContainerTextArea = styled.div<ITextArea>`
  width: 100%;
  position: relative;

  textarea {
    width: 100%;
    box-sizing: border-box;
    height: 32px;
    border-radius: 4px;
    border: 1px solid ${(props) => colorGet(props.status, 500)};
    outline: none;
  }

  label {
    width: inherit;
    font-size: 12px;
    display: flex;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;

    .mandatory-star {
      color: ${colorGet('danger', 500)};
      font-size: 14px;
      margin-left: 3px;
    }
  }

  span {
    display: block;
    color: ${colorGet('danger', 500)};
    font-size: 11px;
  }
`;
