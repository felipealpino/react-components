import styled from 'styled-components';
import { IToast } from '../interface/IToast';

type IToastContainer = IToast & {
  shouldShow: boolean;
  numberOfCardsAvailable: number;
};

export const ToastCardContainer = styled.div<IToastContainer>`
  position: fixed;
  user-select: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 1rem;
  height: 90px;
  width: 312px;
  cursor: pointer;
  /* @todo: ajustar para colorGet function */
  background: ${({ status }) =>
    status === 'success' ? '#4BA155' : status === 'danger' ? '#C84243' : status === 'warning' ? '#E0954B' : '#3DAAC6'};
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 0 10px #999;
  /* margin: 0.5rem 0px; */

  ${({ position, shouldShow, numberOfCardsAvailable }) =>
    position === 'top-right' &&
    ` 
    top: ${numberOfCardsAvailable * 100 + 10}px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    transform: translateX(${shouldShow ? '0' : '200%'});
  `}

  ${({ position, shouldShow, numberOfCardsAvailable }) =>
    position === 'bottom-right' &&
    ` 
    bottom: ${numberOfCardsAvailable * 100 + 10}px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    transform: translateX(${shouldShow ? '0' : '200%'});
  `}


${({ position, shouldShow, numberOfCardsAvailable }) =>
    position === 'top-left' &&
    ` 
    top: ${numberOfCardsAvailable * 100 + 10}px;
    left: 12px;
    transition: transform 0.6s ease-in;
    transform: translateX(${shouldShow ? '0' : '-200%'});
  `}

${({ position, shouldShow, numberOfCardsAvailable }) =>
    position === 'bottom-left' &&
    ` 
    bottom: ${numberOfCardsAvailable * 100 + 10}px;
    left: 12px;
    transition: transform 0.6s ease-in;
    transform: translateX(${shouldShow ? '0' : '-200%'});
  `}

  .toast-icon {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .toast-text-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 210px;

    .toast-title {
      font-size: 18px;
      font-weight: bold;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .toast-subtitle {
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
