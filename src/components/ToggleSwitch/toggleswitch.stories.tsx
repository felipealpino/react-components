import React from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleSwitch } from './index';
import { useCallback } from 'react';
import { select, withKnobs, boolean } from '@storybook/addon-knobs';

storiesOf('ToggleSwitch', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isOutline = boolean('Outline', true);
    const isDisabled = boolean('Disabled', false);
    const isRounded = boolean('Rounded', true);

    const handleOnChange = useCallback((stateCheckButton: boolean): void => {
      console.log(stateCheckButton);
    }, []);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
        <ToggleSwitch
          disabled={isDisabled}
          rounded={isRounded}
          handleOnChange={handleOnChange}
          status={status}
          outline={isOutline}
        />

        <ToggleSwitch
          iconNameDisabled='close'
          iconNameEnabled='checkmark'
          handleOnChange={handleOnChange}
          status={status}
          outline={isOutline}
          rounded={isRounded}
          disabled={isDisabled}
        />

        <ToggleSwitch
          iconNameDisabled='eye-off-2'
          iconNameEnabled='eye'
          status={status}
          rounded={isRounded}
          disabled={isDisabled}
          outline={isOutline}
          handleOnChange={handleOnChange}
        />

        <ToggleSwitch
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
