import React, { useState } from 'react';
import { ElementStatus } from '../../shared/theme/colors';
import { TooltipContainer } from './styles';

export interface ITooltip {
  text: string;
  status?: ElementStatus;
  className?: string;
  position?: 'top' | 'bottom';
  clickable?: boolean;
  children?: React.ReactNode;
}

const Tooltip: React.FC<ITooltip> = ({ clickable = false, status = 'danger', position = 'bottom', ...props }) => {
  const [show, setShow] = useState<boolean>(false);

  console.log(show);
  return (
    <TooltipContainer
      {...props}
      position={position}
      status={status}
      show={show}
      className={`tooltip-container ${props.className || ''}`}
      onMouseLeave={() => !clickable && setShow(false)}
      onMouseEnter={() => !clickable && setShow(true)}
      onClick={() => clickable && setShow(!show)}
    >
      <div className="tooltip-box">
        {props.text}
        <span className="tooltip-arrow" />
      </div>
      <div className="tooltip-children">{props.children}</div>
    </TooltipContainer>
  );
};

export { Tooltip };
