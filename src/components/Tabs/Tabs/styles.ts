import styled from 'styled-components';
import { ITabs } from '.';
import { colorGet } from '../../../shared/utils';

export const TabsContainer = styled.div<ITabs>`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  min-height: 50px;

  .tab-options-list {
    /* box-shadow: 0px 10px 10px -10px ${colorGet('basic', 700)}; */
    font-weight: 600;
    user-select: none;
    display: flexbox;
    justify-content: center;
    overflow-x: auto;
    padding-bottom: 2px;
  }

  .selected {
    color: ${({ status }) =>  colorGet(status, 600)};
    border-bottom: 3px solid ${({ status }) => status && colorGet(status, 600)};

    svg {
      color: ${({ status }) => colorGet(status, 600)} !important;
    }
  }

  .rendered-components-container {
    .rendered-tab {
      display: none;
    }

    .rendered-tab.--show {
      display: block;
    }
  }
`;
