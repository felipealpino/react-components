import styled from 'styled-components';
import { IPagination } from '.';
import { colorGet } from '@shared/utils/colorGet';

export const ContainerPagination = styled.div<IPagination>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  ${({ fixed }) => fixed && 'position: absolute; bottom: 35px; left: 0;'}

  .pagination-content {
    display: flex;

    span {
      margin: auto;
      font-weight: 700;
    }

    .pagination-content-icon {
      cursor: pointer;
      margin: 0px 10px;
      transition: background-color 0.1s ease-in-out;
      background-color: ${({ status }) => colorGet(status, 500)};
      border-radius: ${({ rounded }) => (rounded ? '15px' : '4px')};

      i {
        display: flex;
        align-items: center;
        transition: 0.1s ease-in-out;

        svg {
          width: 25px;
          height: 25px;
          fill: ${({ status }) => colorGet(status, 'Contrast')};
        }
      }

      &:hover {
        background-color: ${({ status }) => colorGet(status, 600)};

        i svg {
          fill: ${({ status }) => colorGet(status, 'Contrast')};
        }
      }
    }
  }
`;
