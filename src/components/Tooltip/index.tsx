import React from "react";
import { TooltipContainer } from "./styles";

interface ITooltip {
  text: string;
}

const Tooltip: React.FC<ITooltip> = ({ children, text }) => {
  const [show, setShow] = React.useState(false);
  return (
    <TooltipContainer className="tooltip-wrapper">
      <div className="tooltip-container">
        <div className={show ? "tooltip-box visible" : "tooltip-box"}>
          {text}
          <span className="tooltip-arrow" />
        </div>
        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          {children}
        </div>
      </div>
    </TooltipContainer>
  );
};

export default Tooltip;