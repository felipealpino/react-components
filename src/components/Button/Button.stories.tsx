import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', false);

    const buttonText = text('Button Text', 'Click me');

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button disabled={isDisabled} status={status} onClick={(event) => console.log(event.target)}>
          {buttonText}
        </Button>
      </div>
    );
  });
