/* eslint-disable jsx-a11y/no-access-key */
import { ElementStatus } from '@shared/theme/colors';
import React from 'react';
import { Button } from '..';
import * as S from './styles';

export interface ICardProps {
  status?: ElementStatus;
  img?: string;
  title?: string;
  description?: string;
  rounded?: boolean;
  button?: boolean;
  direction: 'row' | 'column';


}

const Card: React.FC<ICardProps> = ({status = 'secondary', img, title, description = 'Descrição aqui', rounded, button, direction}) => {
  return (
    <S.Wrapper status={status} rounded={rounded} direction={direction}>
      <S.ImageBox>
        <S.Title>{title}</S.Title>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Container>
          {!!button && <Button status= 'basic'>Comprar</Button>}
        </S.Container>

        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Wrapper>
  );
};

export { Card };
