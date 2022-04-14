import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { BaseStyles } from '../BaseStyles';
storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', false);

    const outline = boolean('Outline ? ', false);

    const buttonText = text('Button Text', 'Click me');

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <BaseStyles />
        <Button
          outline={outline}
          disabled={isDisabled}
          status={status}
          onClick={(event) => console.log(`The button was clicked.`)}
        >
          {buttonText}
        </Button>
      </div>
    );
  });
