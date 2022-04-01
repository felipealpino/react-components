import { ElementStatus } from '../../shared/theme/colors';
import React from 'react';

import { SpinnerContainer } from './styles';

export interface ISpinner {
  status?: ElementStatus;
  fixed?: boolean;
  className?: string;
}

const Spinner: React.FC<ISpinner> = ({ fixed = true, ...props }) => {
  return (
    <SpinnerContainer className={`spinner-contaier ${props.className || ''}`} fixed={fixed} {...props}>
      <div className='spinner-ball'></div>
    </SpinnerContainer>
  );
};

export { Spinner };
