import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { IToast } from '../interface/IToast';
import { ToastCardContainer } from './styles';
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXOctagon } from 'react-icons/fi';

// toast comes from the right and leaves to top
// toast in the center of the page

const ToastCard: React.FC<IToast> = ({ duration = 5000, position = 'top-right', ...props }) => {
  const { toastListCurrent } = useToast();
  const toastCardRef = useRef<HTMLDivElement>(null);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const timeToUnmount = 700; //700ms
  const [myIndexInArray, setMyIndexInArray] = useState<number>(-1);
  const [intervalIdShow, setIntervalIdShow] = useState<NodeJS.Timeout>();
  const [intervalIdRemove, setIntervalIdRemove] = useState<NodeJS.Timeout>();
  const mounted = useRef(false);

  const handleOnClickToastCard = useCallback(() => {
    setShouldShow(false);
    const intervalIdRemove = setTimeout(() => {
      props.handleOnClick(props.id);
    }, timeToUnmount);

    setIntervalIdShow(intervalIdShow);
    setIntervalIdRemove(intervalIdRemove);
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
    const intervalIdShow = setTimeout(() => {
      mounted.current && setShouldShow(false);
    }, duration);

    const intervalIdRemove = setTimeout(() => {
      //removing from array
      if (!toastCardRef || !toastCardRef.current) return;
      toastCardRef.current.click();
    }, duration + timeToUnmount);

    setIntervalIdShow(intervalIdShow);
    setIntervalIdRemove(intervalIdRemove);
  }, [toastCardRef.current]);

  const handleMouseLeave = useCallback(() => {
    removeToastFromScreen();
  }, [removeToastFromScreen]);

  const handleMouseEnter = useCallback(() => {
    intervalIdShow && clearTimeout(intervalIdShow);
    intervalIdRemove && clearTimeout(intervalIdRemove);
  }, [intervalIdShow, intervalIdRemove]);

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
      timeToUnmount={timeToUnmount}
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
