import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { SwipeToggle } from './index';
import { select, withKnobs, boolean, text } from '@storybook/addon-knobs';
import { v1 as uuidv1 } from 'uuid';

storiesOf('SwipeToggle', module)
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

    console.log(`isOutline`, isOutline);
    console.log(`isDisabled`, isDisabled);
    console.log(`isRounded`, isRounded);
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px' }}>
        {/* <SwipeToggle
          disabled={isDisabled}
          rounded={isRounded}
          handleOnChange={handleOnChange}
          status={status}
          outline={isOutline}
          key={uuidv1()}
        />

        <SwipeToggle
          iconNameDisabled='close'
          iconNameEnabled='checkmark'
          handleOnChange={handleOnChange}
          status={status}
          outline={isOutline}
          rounded={isRounded}
          disabled={isDisabled}
        />

        <SwipeToggle
          iconNameDisabled='eye-off-2'
          iconNameEnabled='eye'
          status={status}
          rounded={isRounded}
          disabled={isDisabled}
          outline={isOutline}
          handleOnChange={handleOnChange}
        /> */}

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
