import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Accordion } from '../Accordion';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', true);

    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%', flexDirection: 'column' }}>
        <Accordion disabled={isDisabled} status={status} title='Accordion 1'>
          <div>alouuuu</div>
          <div>alouuuu</div>
          <div>alouuuu</div>
        </Accordion>

        <Accordion title='Accordion 2'></Accordion>
      </div>
    );
  });
