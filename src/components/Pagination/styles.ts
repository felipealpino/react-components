import { ElementStatus } from '@shared/theme/colors';
import styled from 'styled-components';
import { colors } from '@shared/theme/colors';

interface IStyledPagination {
  status: ElementStatus;
  fixed: boolean;
}
export const StyledPagination = styled.div<IStyledPagination>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  ${(p) => p.fixed && 'position: absolute; bottom: 35px; left: 0;'}

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
      background-color: ${({ status }) => `${colors[`${status}500`]}`};
      border-radius: 15px;

      i {
        display: flex;
        align-items: center;
        transition: 0.1s ease-in-out;

        svg {
          width: 25px;
          height: 25px;
          fill: ${({ status }) => `${colors[`${status}Contrast`]}`};
        }
      }

      &:hover {
        background-color: ${({ status }) => `${colors[`${status}600`]}`};

        i svg {
          fill: ${({ status }) => `${colors[`${status}Contrast`]}`};
        }
      }
    }
  }
`;
