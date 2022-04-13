import styled from 'styled-components';
import { IPagination } from '.';
import { colorGet } from '../../shared/utils/colorGet';

type IPaginationProps = IPagination & {
  isFirstPage: boolean;
  isLastPage: boolean;
};

export const PaginationContainer = styled.div<IPaginationProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

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
      display: flex;
      transition: 0.1s ease-in-out;

      svg {
        width: 25px;
        height: 25px;
        color: ${({ status }) => colorGet(status, 'Contrast')};
      }

      &:hover {
        background-color: ${({ status }) => colorGet(status, 600)};
      }
    }
  }

  ${({ isFirstPage }) =>
    isFirstPage &&
    `
    .pagination-content-icon.back {
      opacity: 0.3;
    }
  
  `}

  ${({ isLastPage }) =>
    isLastPage &&
    `
    .pagination-content-icon.forward {
      opacity: 0.3;
    }
  
  `}
`;
