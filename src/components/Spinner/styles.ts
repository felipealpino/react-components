import { ISpinner } from '../../components/Spinner';
import { colorGet } from '../../shared/utils/colorGet';
import styled from 'styled-components';

export const SpinnerContainer = styled.div<ISpinner>`
  ${({ fixed }) =>
    fixed &&
    ` 
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  /* 12sm 16md 24lg 32xl */
  
  .spinner-ball {
    width: 30px;
    height: 30px;
    border: 4px solid ${({ status }) => colorGet(status, 600)};
    border-top: 4px solid ${({ status }) => colorGet(status, 300)};
    border-left: 4px solid ${({ status }) => colorGet(status, 300)};
    border-right: 4px solid ${({ status }) => colorGet(status, 300)};
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
