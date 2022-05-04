import React, { Fragment } from 'react';
import { useToast } from '../context/ToastContext';
import { ToastCard } from '../ToastCard';

const ToastCardsContainer: React.FC = () => {
  const { toastListCurrent } = useToast();

  return (
    <Fragment>
      {toastListCurrent.map((toast) => (
        <ToastCard key={toast.id} {...toast} />
      ))}
    </Fragment>
  );
};

export { ToastCardsContainer };
