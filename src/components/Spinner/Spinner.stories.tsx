import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Spinner } from '../Spinner';
import { Accordion } from '../Accordion';

storiesOf('Spinner', module)
  .addDecorator(withKnobs)

  .add('Not Fixed', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    return (
      <Accordion title='Spinner inside me'>
        <Spinner fixed={false} status={status} />
      </Accordion>
    );
  })

  .add('Fixed', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    return (
      <div>
        Loading ....
        <Spinner status={status} />
      </div>
    );
  });
