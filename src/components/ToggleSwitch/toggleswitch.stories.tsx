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

    const outline = boolean('Outline', true);
    const disabled = boolean('Disabled', false);

    const handleOnChange = useCallback((stateCheckButton: boolean): void => {
      console.log(stateCheckButton);
    }, []);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
        <ToggleSwitch disabled={disabled} handleOnChange={handleOnChange} status={status} outline={outline} />
        <ToggleSwitch
          iconNameDisabled='close'
          iconNameEnabled='checkmark'
          handleOnChange={handleOnChange}
          status={status}
          outline={outline}
          disabled={disabled}
        />
        <ToggleSwitch
          iconNameDisabled='eye-off-2'
          iconNameEnabled='eye'
          rounded={false}
          status={status}
          disabled={disabled}
          outline={outline}
          handleOnChange={handleOnChange}
        />
        <ToggleSwitch
          rounded={true}
          animatedIcon={true}
          handleOnChange={handleOnChange}
          disabled={disabled}
          outline={outline}
          status={status}
          isChecked={true}
        />
      </div>
    );
  });
