import { ISpinner } from '@components/Spinner';
import { colorGet } from '@shared/utils/colorGet';
import styled from 'styled-components';

export const SpinnerContainer = styled.div<ISpinner>`
  ${({fixed}) => fixed && ` 
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  .spinner-ball {
    width: 30px;
    aspect-ratio: 1;
    border: 4px solid ${({ status }) => colorGet(status, 500)};
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s cubic-bezier(1, 1, 1, 1) infinite;
    margin: auto;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
