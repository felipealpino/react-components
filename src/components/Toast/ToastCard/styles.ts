import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
import { IToast } from '../interface/IToast';

type IToastContainer = IToast & {
  shouldShow: boolean;
  myIndexInArray: number;
  timeToUnmount: number;
};

export const ToastCardContainer = styled.div<IToastContainer>`
  position: fixed;
  user-select: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 1rem;
  height: 80px;
  max-width: 400px;
  min-width: 296px;
  cursor: pointer;
  background: ${({ status }) => colorGet(status, 500)};
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 0 10px #999;

  ${({ position, shouldShow, myIndexInArray, timeToUnmount }) =>
    position === 'top-right' &&
    ` 
    top: ${myIndexInArray * 100 + 10}px;
    right: 12px;
    transition: transform ${timeToUnmount}ms ease-in-out;
    transform: translateX(${shouldShow ? '0' : '200%'});
  `}

  ${({ position, shouldShow, myIndexInArray, timeToUnmount }) =>
    position === 'bottom-right' &&
    ` 
    bottom: ${myIndexInArray * 100 + 10}px;
    right: 12px;
    transition: transform ${timeToUnmount}ms ease-in-out;
    transform: translateX(${shouldShow ? '0' : '200%'});
  `}


${({ position, shouldShow, myIndexInArray, timeToUnmount }) =>
    position === 'top-left' &&
    ` 
    top: ${myIndexInArray * 100 + 10}px;
    left: 12px;
    transition: transform ${timeToUnmount}ms ease-in-out;
    transform: translateX(${shouldShow ? '0' : '-200%'});
  `}

${({ position, shouldShow, myIndexInArray, timeToUnmount }) =>
    position === 'bottom-left' &&
    ` 
    bottom: ${myIndexInArray * 100 + 10}px;
    left: 12px;
    transition: transform ${timeToUnmount}ms ease-in-out;
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
    max-width: 300px;

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
