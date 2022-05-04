import React, { useState } from 'react';
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
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const [value, setValue] = useState<string>('marrom bom boom');

    const handleSubmit = (formData) => {
      console.log(formData);
      setValue(formData.textAreaName);
    };

    return (
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BaseStyles />
        <TextAreaForm
          maxLength={30}
          cols={20}
          rows={2}
          status={status}
          label="Text Area Label:"
          mandatory="on"
          name="textAreaName"
          defaultValue={value}
          resizable="none"
        />
        Value: {value}
        <Button type="submit">Submit</Button>
      </Form>
    );
  });
