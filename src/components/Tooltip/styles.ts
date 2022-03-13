import styled from "styled-components";

export const TooltipContainer = styled.div`
  .tooltip-container {
    position: relative;
    font-size: 10px;
  }
  .tooltip-box {
    position: absolute;
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    top: calc(100% + 5px);
    display: none;
    z-index: 4;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltip-box.visible {
    display: block;
    width: fit-content;
  }
  .tooltip-arrow {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;
  }
`;