import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Accordion } from '../Accordion';
import { Accordions } from './Accordions';
import { BaseStyles } from '../BaseStyles';
import { Select } from '../Selects/Select';

const names = [
  { name: 'Thawan Cavalcante', value: 'thawan' },
  { name: 'Gabriel Campos', value: 'gabriel' },
  { name: 'Igor Araujo', value: 'igor' },
  { name: 'Felipe Gontijo', value: 'felipe' }
];

storiesOf('Accordion', module)
  .addDecorator(withKnobs)

  .add('Open Multiple', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', false);

    const selectBodyFillSpace = boolean('Select Options Fill Space ', false);

    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%', flexDirection: 'column' }}>
        <BaseStyles />
        <Accordion disabled={isDisabled} status={status} title='Custom Accordion'>
          <div>alouuuu</div>
          <div>alouuuu</div>
          <div>alouuuu</div>
          <Select
            optionsFillSpace={selectBodyFillSpace}
            handleOnChange={(option) => console.log(option, 'name')}
            placeholder='Select your name'
            status={status}
            label='Names:'
            name='name'
            mandatory='on'
            options={names}
          />
        </Accordion>
        <Accordion disabled={true} title='Disabled Accordion'></Accordion>
      </div>
    );
  })

  .add('Open One', () => {
    const gap = text('Gap between Accordions ', '0px');

    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'basic'
    );

    const selectBodyFillSpace = boolean('Select Options Fill Space ', false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <BaseStyles />
        <Accordions gap={gap}>
          <Accordion title='Accordion 1' status='primary'>
            <div>oi</div>
            <Select
              optionsFillSpace={selectBodyFillSpace}
              handleOnChange={(option) => console.log(option, 'name')}
              placeholder='Select your name'
              status={status}
              label='Names:'
              name='name'
              mandatory='on'
              options={names}
            />
          </Accordion>
          <Accordion title='Accordion 2' disabled status='secondary'>
            <div>oi</div>
          </Accordion>
          <Accordion title='Accordion 3' status='tertiary'>
            <div>oi</div>
          </Accordion>
        </Accordions>

        <Accordions gap={gap}>
          <Accordion title='Accordion 1' status={status}>
            <div>oi</div>
          </Accordion>
          <Accordion title='Accordion 2' status={status}>
            <div>oi</div>
          </Accordion>
          <Accordion title='Accordion 3' status={status}>
            <div>oi</div>
          </Accordion>
        </Accordions>
      </div>
    );
  });
