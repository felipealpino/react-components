import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import { IToast } from '../interface/IToast';
import { ToastCardContainer } from './styles';
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXOctagon } from 'react-icons/fi';

const ToastCard: React.FC<IToast> = ({ duration = 5000, position = 'top-right', ...props }) => {
  const { toastListCurrent } = useToast();
  const toastCardRef = useRef<HTMLDivElement>(null);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [alreadyClicked, setAlreadyClicked] = useState<boolean>(false);
  const timeToUnmount = 700; //700ms

  const [myIndexInArray, setMyIndexInArray] = useState<number>(-1);

  const handleOnClickToastCard = useCallback(() => {
    setShouldShow(false);
    setAlreadyClicked(true);

    props.handleOnClick(props.id, toastListCurrent);
  }, [props, toastListCurrent]);

  const toastIcon = useMemo(() => {
    if (props.status === 'success') return <FiCheckCircle />;
    if (props.status === 'warning') return <FiAlertTriangle />;
    if (props.status === 'info') return <FiInfo />;
    if (props.status === 'danger') return <FiXOctagon />;
    return;
  }, [props.status]);

  useEffect(() => {
    if (alreadyClicked) return;
    setShouldShow(true);

    setTimeout(() => {
      setShouldShow(false);
    }, duration);

    setTimeout(() => {
      //removing from array
      if (!toastCardRef || !toastCardRef.current) return;
      toastCardRef.current.click();
    }, duration + timeToUnmount);
  }, [alreadyClicked, duration]);

  useEffect(() => {
    const myIndex = toastListCurrent.findIndex((toast) => toast.id === props.id);
    setMyIndexInArray(myIndex)
  }, [props.id, toastListCurrent]);

  return (
    <ToastCardContainer
      {...props}
      // numberOfCardsAvailable={numberOfCardsAvailable - 1}
      numberOfCardsAvailable={myIndexInArray}
      position={position}
      duration={duration}
      ref={toastCardRef}
      className={`toast-card ${props.className ? props.className : ''}`}
      onClick={handleOnClickToastCard}
      shouldShow={shouldShow}
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
