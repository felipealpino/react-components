import React, { useState, useCallback, useContext } from 'react';
import { IToast, IToastOptions } from '../interface/IToast';
import { v4 as uuidv4 } from 'uuid';

export type IToastContextData = {
  addToast: (options: IToastOptions) => void;
  toastListCurrent: IToast[];
};

export const ToastContext = React.createContext<IToastContextData>({} as IToastContextData);

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastListCurrent, setToastListCurrent] = useState<IToast[]>([]);

  const removeToastCard = useCallback((cardId: string) => {
    setToastListCurrent((oldState) => {
      return oldState.filter((toast) => toast.id !== cardId);
    });
  }, []);

  const addToast = useCallback(
    (options: IToastOptions) => {
      const newToastId = uuidv4();
      const newToast: IToast = {
        id: newToastId,
        handleOnClick: removeToastCard,
        duration: options.duration,
        position: options.position,
        title: options.title,
        subtitle: options.subtitle,
        status: options.status,
      };

      setToastListCurrent((oldState) => {
        const filteredPositions = oldState.filter((toast) => toast.position === newToast.position);
        return [newToast, ...filteredPositions];
      });
    },
    [removeToastCard],
  );

  return <ToastContext.Provider value={{ addToast, toastListCurrent }}>{children}</ToastContext.Provider>;
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { useToast, ToastProvider };
