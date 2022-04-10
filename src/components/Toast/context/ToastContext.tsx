import React, { useState, useCallback, useContext } from 'react';
import { IToast, IToastOptions, IToastPositions } from '../interface/IToast';
import { v4 as uuidv4 } from 'uuid';

export type IToastContextData = {
  addToast: (options: IToastOptions) => void;
  toastListCurrent: IToast[];
  containerPosition: IToastPositions;
};

export const ToastContext = React.createContext<IToastContextData>({} as IToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [toastListCurrent, setToastListCurrent] = useState<IToast[]>([]);
  const [containerPosition, setContainerPosition] = useState<IToastPositions>('top-right');

  const removeToastCard = useCallback((cardId: string, toasts: IToast[]) => {
    const filtered = toasts.filter((toast) => toast.id !== cardId);
    setToastListCurrent(filtered);
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
        status: options.status
      };

      options.position && setContainerPosition(options.position);

      setToastListCurrent((oldState) => {
        const filteredPositions = oldState.filter((toast) => toast.position === newToast.position);
        return [newToast, ...filteredPositions];
      });
    },
    [removeToastCard]
  );

  return (
    <ToastContext.Provider value={{ containerPosition, addToast, toastListCurrent }}>{children}</ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { useToast, ToastProvider };
