import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { BaseStyles } from '../BaseStyles';
import { FiSave } from 'react-icons/fi';

storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary'
    );

    const iconPosition = select('Icon Position', ['left', 'right'], 'right');

    const isDisabled = boolean('Disabled ? ', false);

    const outline = boolean('Outline ? ', false);

    const buttonText = text('Button Text', 'Click me');

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <BaseStyles />
        <Button
          icon={FiSave}
          iconfill='#996DFF'
          iconcolor='#633BBC'
          outline={outline}
          disabled={isDisabled}
          status={status}
          onClick={(event) => console.log(`The button was clicked.`)}
          iconposition={iconPosition}
        >
          {buttonText}
        </Button>

        <Button
          icon={FiSave}
          outline={outline}
          disabled={isDisabled}
          status={status}
          onClick={(event) => console.log(`The button was clicked.`)}
          iconposition={iconPosition}
        >
          {buttonText}
        </Button>

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
