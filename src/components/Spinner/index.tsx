import { ElementStatus } from '../../shared/theme/colors';
import React from 'react';

import { SpinnerBall, SpinnerContainer } from './styles';

export interface ISpinner {
  status?: ElementStatus;
  fixed?: boolean;
  className?: string;
  size?: string;
}

const Spinner: React.FC<ISpinner> = ({ fixed = true, size = '30px', ...props }) => {
  return (
    <SpinnerContainer className={`spinner-container ${props.className || ''}`} fixed={fixed} {...props}>
      <SpinnerBall className="spinner-ball" status={props.status} size={size} />
    </SpinnerContainer>
  );
};

export { Spinner };
