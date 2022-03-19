import { colorGet } from '@shared/utils/colorGet';
import styled, { css, DefaultTheme } from 'styled-components';
import { ICardProps } from '.';



const wrapperModifiers = {
  rounded: () => css`
    border-radius: 0.8rem;
  `,
  column: () => css`
  flex-direction: column;
  `,
  row: () => css`
  flex-direction: row;
  `,
}

export const Wrapper = styled.div<ICardProps>`
  ${({ rounded, direction }) => css`
    display: flex;
    background: #223e5e;
    ${!!rounded && wrapperModifiers.rounded};
    ${!!direction && wrapperModifiers[direction]};


  `}

`;

export const ImageBox = styled.div`
  position: relative;

  img {
    max-width: 300px;
    max-height: 100%;
    background-position: center center;
    background-size: cover;
  }
`;

export const Container = styled.p`
display: flex;

`;
export const Content = styled.div`
display: flex;
flex-direction: column;
margin: 0rem 1rem 1rem 1rem;
`;

export const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: ${() => colorGet('basic', 400)};
  font-size: 1rem;
`;

export const Title = styled.p`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: .2rem;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  color: white;
  bottom: 0;
  left: 2rem;
`;




