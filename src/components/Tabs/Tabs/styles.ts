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

  .tab-options-list {
    min-height: 50px;
    font-weight: 600;
    user-select: none;
    display: flex;
    overflow-x: auto;
    padding-bottom: 2px;
    justify-content: ${({ tabsPosition }) => tabsPosition};
  }

  .selected {
    color: ${({ status }) => colorGet(status, 600)};
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
