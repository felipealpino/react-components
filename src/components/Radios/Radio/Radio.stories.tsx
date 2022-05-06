import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from '../Radio';
import { withKnobs, select, radios, number } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const options = { Yes: 'on', No: undefined };
    const isMandatory = radios('Mandatory', options, undefined);

    const size = number('Size', 30);

    return (
      <Fragment>
        <BaseStyles />
        <Radio
          radioSize={size}
          id="radio1"
          value="radio1"
          status={status}
          name="teste"
          onCheck={(value) => console.log(`checked: ${value}`)}
          label="Radio1"
          mandatory={isMandatory}
        />
        <br />
        <Radio
          radioSize={size}
          id="radio2"
          value="radio2"
          status={status}
          name="teste"
          onCheck={(value) => console.log(`checked: ${value}`)}
          label="Radio2"
          mandatory={isMandatory}
        />
      </Fragment>
    );
  });
