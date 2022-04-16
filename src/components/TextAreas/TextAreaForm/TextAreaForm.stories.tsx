import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
import { TextAreaForm } from '../TextAreaForm';
import { Button } from '../../Button';
import { Form } from '@unform/web';

storiesOf('TextAreaForm', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const handleSubmit = (formData) => {
      console.log(`formData`, formData);
    };

    return (
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BaseStyles />
        <TextAreaForm
          maxLength={30}
          cols={20}
          rows={2}
          status={status}
          label='Text Area Label:'
          mandatory='on'
          name='text-area-name'
          defaultValue='marrom bom boom'
          resizable='none'
        />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  });
