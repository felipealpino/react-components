import React, { Fragment, useCallback } from 'react';
import { ElementStatus } from '../../shared/theme/colors';
import { Button } from '../Button';
import { useToast } from './context/ToastContext';
import { IToastOptions, IToastPositions } from './interface/IToast';

const ExampleToUse: React.FC = () => {
  const { addToast } = useToast();

  const handleClickButton = useCallback(
    (toastStatus: ElementStatus, position: IToastPositions) => {
      const state: IToastOptions = {
        title: 'Very nice Toast title',
        subtitle: 'Wtf!?  why is this subtitle so big ?',
        duration: 2000,
        position: position,
        status: toastStatus
      };

      addToast(state);
    },
    [addToast]
  );

  return (
    <Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={() => handleClickButton('success', 'top-left')} status='success'>
              Success
            </Button>
            <Button onClick={() => handleClickButton('warning', 'top-left')} status='warning'>
              Warning
            </Button>
            <Button onClick={() => handleClickButton('danger', 'top-left')} status='danger'>
              Danger
            </Button>
            <Button onClick={() => handleClickButton('info', 'top-left')} status='info'>
              Information
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifySelf: 'flex-end' }}>
            <Button onClick={() => handleClickButton('success', 'top-right')} status='success'>
              Success
            </Button>
            <Button onClick={() => handleClickButton('warning', 'top-right')} status='warning'>
              Warning
            </Button>
            <Button onClick={() => handleClickButton('danger', 'top-right')} status='danger'>
              Danger
            </Button>
            <Button onClick={() => handleClickButton('info', 'top-right')} status='info'>
              Information
            </Button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={() => handleClickButton('success', 'bottom-left')} status='success'>
              Success
            </Button>
            <Button onClick={() => handleClickButton('warning', 'bottom-left')} status='warning'>
              Warning
            </Button>
            <Button onClick={() => handleClickButton('danger', 'bottom-left')} status='danger'>
              Danger
            </Button>
            <Button onClick={() => handleClickButton('info', 'bottom-left')} status='info'>
              Information
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifySelf: 'flex-end' }}>
            <Button onClick={() => handleClickButton('success', 'bottom-right')} status='success'>
              Success
            </Button>
            <Button onClick={() => handleClickButton('warning', 'bottom-right')} status='warning'>
              Warning
            </Button>
            <Button onClick={() => handleClickButton('danger', 'bottom-right')} status='danger'>
              Danger
            </Button>
            <Button onClick={() => handleClickButton('info', 'bottom-right')} status='info'>
              Information
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { ExampleToUse };
