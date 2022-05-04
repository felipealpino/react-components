import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';
import { BaseStyles } from '../BaseStyles';
storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Tooltip Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'danger'
    );

    const tooltipPosition = select('Tooltip position', ['bottom', 'top'], 'bottom');

    const isClickable = boolean('Clickable', true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <BaseStyles />
        <Tooltip clickable={isClickable} position={tooltipPosition} status={status} text='The button is enabled'>
          <Button>Hover to tooltip</Button>
        </Tooltip>

        <Tooltip clickable={isClickable} position={tooltipPosition} status={status} text='The button is disabled'>
          <Button disabled>Hover to tooltip</Button>
        </Tooltip>
      </div>
    );
  });
