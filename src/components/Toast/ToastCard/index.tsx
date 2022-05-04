import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useToast } from '../context/ToastContext';
import { IToast } from '../interface/IToast';
import { ToastCardContainer } from './styles';
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXOctagon } from 'react-icons/fi';

// toast comes from the right and leaves to top
// toast in the center of the page

const ToastCard: React.FC<IToast> = ({ duration = 5000, position = 'top-right', handleOnClick, ...props }) => {
  const { toastListCurrent } = useToast();
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const timeToUnmount = 700; //700ms
  const [myIndexInArray, setMyIndexInArray] = useState<number>(-1);
  const intervalIdShow: { current: NodeJS.Timeout | null } = useRef(null);
  const intervalIdRemove: { current: NodeJS.Timeout | null } = useRef(null);
  const mounted = useRef(false);

  const handleOnClickToastCard = useCallback(() => {
    setShouldShow(false);
    intervalIdRemove.current = setTimeout(() => {
      handleOnClick(props.id);
    }, timeToUnmount);
  }, [handleOnClick, props.id]);

  const toastIcon = useMemo(() => {
    if (props.status === 'success') return <FiCheckCircle />;
    if (props.status === 'warning') return <FiAlertTriangle />;
    if (props.status === 'info') return <FiInfo />;
    if (props.status === 'danger') return <FiXOctagon />;
    return;
  }, [props.status]);

  const handleMouseEnter = useCallback(() => {
    intervalIdShow.current && clearTimeout(intervalIdShow.current);
    intervalIdRemove.current && clearTimeout(intervalIdRemove.current);
  }, []);

  const removeToastFromScreen = useCallback(() => {
    intervalIdShow.current = setTimeout(() => {
      mounted.current && setShouldShow(false);
    }, duration);

    intervalIdRemove.current = setTimeout(() => {
      //removing from array
      handleOnClick(props.id);
    }, duration + timeToUnmount);
  }, [duration, handleOnClick, props.id]);

  const handleMouseLeave = useCallback(() => {
    removeToastFromScreen();
  }, [removeToastFromScreen]);

  useEffect(() => {
    setShouldShow(true);
    removeToastFromScreen();
  }, [removeToastFromScreen]);

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
      handleOnClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      myIndexInArray={myIndexInArray}
      position={position}
      duration={duration}
      className={`toast-card ${props.className ? props.className : ''}`}
      onClick={handleOnClickToastCard}
      shouldShow={shouldShow}
      timeToUnmount={timeToUnmount}
    >
      <div className="toast-text-info">
        <div className="toast-title">{props.title}</div>
        <div className="toast-subtitle">{props.subtitle}</div>
      </div>
      <div className="toast-icon">{toastIcon}</div>
    </ToastCardContainer>
  );
};

export { ToastCard };
