import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { SwipeToggle } from './index';
import { select, withKnobs, boolean } from '@storybook/addon-knobs';
import { v1 as uuidv1 } from 'uuid';
import { BaseStyles } from '../BaseStyles';
import { FiX, FiCheck, FiEye, FiEyeOff } from 'react-icons/fi';

storiesOf('SwipeToggle', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const isOutline = boolean('Outline', true);
    const isDisabled = boolean('Disabled', false);
    const isRounded = boolean('Rounded', true);

    const handleOnChange = useCallback((stateCheckButton: boolean): void => {
      console.log(stateCheckButton);
    }, []);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
        <BaseStyles />
        <SwipeToggle disabled={isDisabled} rounded={isRounded} handleOnChange={handleOnChange} status={status} outline={isOutline} key={uuidv1()} />

        <SwipeToggle
          iconNameDisabled={FiX}
          iconNameEnabled={FiCheck}
          handleOnChange={handleOnChange}
          status={status}
          outline={isOutline}
          rounded={isRounded}
          disabled={isDisabled}
        />

        <SwipeToggle
          iconNameDisabled={FiEyeOff}
          iconNameEnabled={FiEye}
          status={status}
          rounded={isRounded}
          disabled={isDisabled}
          outline={isOutline}
          handleOnChange={handleOnChange}
        />

        <SwipeToggle
          rounded={isRounded}
          animatedIcon={true}
          handleOnChange={handleOnChange}
          disabled={isDisabled}
          outline={isOutline}
          status={status}
          isChecked={true}
        />
      </div>
    );
  });
