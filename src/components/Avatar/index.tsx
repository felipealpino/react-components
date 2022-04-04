import React from 'react';

import { AvatarContainer } from './styles';

export interface IAvatar {
  image?: string;
  width?: string | number;
  height?: string | number;
}

const Avatar: React.FC<IAvatar> = (props) => {
  return (
    <AvatarContainer {...props}>
      <img src={props.image} alt='avatar' />
    </AvatarContainer>
  );
};

export { Avatar };
