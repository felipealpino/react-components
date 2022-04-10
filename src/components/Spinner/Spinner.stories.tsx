import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Spinner } from '../Spinner';
import { Accordion } from '../Accordion';
import { BaseStyles } from '../BaseStyles';
storiesOf('Spinner', module)
  .addDecorator(withKnobs)

  .add('Not Fixed', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    return (
      <Fragment>
        <BaseStyles />
        <Accordion title='Spinner inside me'>
          <Spinner fixed={false} status={status} />
        </Accordion>
      </Fragment>
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
        <BaseStyles />
        Loading ....
        <Spinner status={status} />
      </div>
    );
  });
