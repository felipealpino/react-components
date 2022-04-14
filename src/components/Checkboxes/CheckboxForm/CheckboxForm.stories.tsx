import React, { useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { Form } from '@unform/web';
import { Button } from '../../Button';
import { CheckboxForm } from '../../Checkboxes/CheckboxForm';
import { BaseStyles } from '../../BaseStyles';

storiesOf('CheckboxForm', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', false);

    const semiRounded = boolean('Semi Rounded ? ', true);

    const handleSubmit = (formData) => {
      console.log(`formData`, formData);
    };

    return (
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BaseStyles />
        <CheckboxForm semiRounded={semiRounded} name='checkbox1' id='checkbox1' disabled={isDisabled} />
        <CheckboxForm semiRounded={semiRounded} name='checkbox2' id='checkbox2' disabled={isDisabled} />
        <CheckboxForm semiRounded={semiRounded} name='checkbox3' id='checkbox3' disabled={isDisabled} />
        <CheckboxForm semiRounded={semiRounded} name='checkbox4' id='checkbox4' disabled={isDisabled} />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  });
