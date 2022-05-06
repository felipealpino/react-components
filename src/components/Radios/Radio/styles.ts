import styled from 'styled-components';
import { IRadio } from '.';
import { colorGet } from '../../../shared/utils';

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputRadio = styled.input<Pick<IRadio, 'status' | 'radioSize'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: ${(props) => `${props.radioSize}px`};
  height: ${(props) => `${props.radioSize}px`};
  border: 0.2rem solid ${(props) => colorGet(props.status, 500)};
  border-radius: 50%;
  background: transparent;
  transition: 0.2s;
  transition-property: background, box-shadow;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 0.3rem ${(props) => colorGet(props.status, 200)};
  }

  /* &:focus {
    box-shadow: 0 0 0.5rem ${(props) => colorGet(props.status, 200)};
  } */

  &:before {
    content: '';
    width: ${(props) => `${(props.radioSize || 30) / 2}px`};
    height: ${(props) => `${(props.radioSize || 30) / 2}px`};
    border-radius: 50%;
    background: ${(props) => colorGet(props.status, 500)};
    transition: opacity 0.2s;
    opacity: 0;
    position: absolute;
  }
  &:checked {
    &:before {
      opacity: 1;
    }
  }
`;

export const Label = styled.label<Pick<IRadio, 'status'>>`
  color: ${(props) => colorGet(props.status, 500)};
  cursor: pointer;
  font-weight: 500;
`;
