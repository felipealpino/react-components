import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Accordion } from '../Accordion';
import { Accordions } from './Accordions';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)

  .add('Open Multiple', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', false);

    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%', flexDirection: 'column' }}>
        <Accordion disabled={isDisabled} status={status} title='Custom Accordion'>
          <div>alouuuu</div>
          <div>alouuuu</div>
          <div>alouuuu</div>
        </Accordion>

        <Accordion disabled={true} title='Disabled Accordion'></Accordion>
      </div>
    );
  })

  .add('Open One', () => {
    return (
      <Accordions gap='20px'>
        <Accordion title='Accordion 1'>
          <div>oi</div>
        </Accordion>
        <Accordion title='Accordion 2'>
          <div>oi</div>
        </Accordion>
        <Accordion title='Accordion 3'>
          <div>oi</div>
        </Accordion>
      </Accordions>
    );
  });
