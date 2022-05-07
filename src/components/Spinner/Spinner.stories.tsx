import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Spinner } from '../Spinner';
import { Accordion } from '../Accordion';
import { BaseStyles } from '../BaseStyles';
storiesOf('Spinner', module)
  .addDecorator(withKnobs)

  .add('Not Fixed', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    return (
      <Fragment>
        <BaseStyles />
        <Accordion title="Spinner inside me">
          <Spinner fixed={false} status={status} />
        </Accordion>
      </Fragment>
    );
  })

  .add('Fixed', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'secondary',
    );

    const spinnerSize = select('Size', ['20px', '30px', '40px', '50px', '60px'], '30px');

    return (
      <div>
        <BaseStyles />
        Loading ....
        <Spinner status={status} size={spinnerSize} />
      </div>
    );
  });
