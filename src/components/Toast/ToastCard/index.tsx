import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { IToast } from '../interface/IToast';
import { ToastCardContainer } from './styles';
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXOctagon } from 'react-icons/fi';

// mouse over stop time to leave the page
// toast comes from the right and leaves to top
// toast in the center of the page

const ToastCard: React.FC<IToast> = ({ duration = 5000, position = 'top-right', ...props }) => {
  const { toastListCurrent } = useToast();
  const toastCardRef = useRef<HTMLDivElement>(null);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const timeToUnmount = 700; //700ms
  const [myIndexInArray, setMyIndexInArray] = useState<number>(-1);
  // const [isMouseOverToast, setIsMouseOverToast] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [intervalId2, setIntervalId2] = useState<NodeJS.Timeout>();
  const mounted = useRef(false);

  const handleOnClickToastCard = useCallback(() => {
    setShouldShow(false);

    props.handleOnClick(props.id);
  }, [props, toastListCurrent]);

  const toastIcon = useMemo(() => {
    if (props.status === 'success') return <FiCheckCircle />;
    if (props.status === 'warning') return <FiAlertTriangle />;
    if (props.status === 'info') return <FiInfo />;
    if (props.status === 'danger') return <FiXOctagon />;
    return;
  }, [props.status]);

  useEffect(() => {
    setShouldShow(true);
    removeToastFromScreen();
  }, [duration]);

  const removeToastFromScreen = useCallback(() => {
    const intervalId = setTimeout(() => {
      setShouldShow(false);
    }, duration);

    const intervalId2 = setTimeout(() => {
      //removing from array
      if (!toastCardRef || !toastCardRef.current) return;
      toastCardRef.current.click();
    }, duration + timeToUnmount);

    setIntervalId(intervalId);
    setIntervalId2(intervalId2);
  }, [toastCardRef.current]);

  const handleMouseLeave = useCallback(() => {
    removeToastFromScreen();
  }, [removeToastFromScreen]);

  const handleMouseEnter = useCallback(() => {
    intervalId && clearTimeout(intervalId);
    intervalId2 && clearTimeout(intervalId2);
  }, [intervalId, intervalId2]);

  useEffect(() => {
    const myIndex = toastListCurrent.findIndex((toast) => toast.id === props.id);
    setMyIndexInArray(myIndex);
  }, [props.id, toastListCurrent]);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <ToastCardContainer
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      myIndexInArray={myIndexInArray}
      position={position}
      duration={duration}
      ref={toastCardRef}
      className={`toast-card ${props.className ? props.className : ''}`}
      onClick={handleOnClickToastCard}
      shouldShow={shouldShow}
    >
      <div className='toast-text-info'>
        <div className='toast-title'>{props.title}</div>
        <div className='toast-subtitle'>{props.subtitle}</div>
      </div>
      <div className='toast-icon'>{toastIcon}</div>
    </ToastCardContainer>
  );
};

export { ToastCard };
