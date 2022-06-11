import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
import { RadioForm } from '../RadioForm';
import { Form } from '@unform/web';
import { Button } from '../../Button';

storiesOf('RadioForm', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const size = select('Size', [30, 40, 50], 30);

    const handleSubmit = (data) => {
      const checkedValues: Array<any> = [];
      
      for (const property in data) {
        const obj = data[property];
        if (obj.isChecked) checkedValues.push(obj);
      }

      console.log('checkedValues >>>> ', checkedValues);
    };

    return (
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BaseStyles />

        <div style={{ display: 'flex', gap: '10px' }}>
          <RadioForm radioSize={size} id="yes_id" value="yes" status={status} name="radio1" label="Yes" />

          <RadioForm radioSize={size} id="no_id" value="no" status={status} name="radio1" label="No" />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <RadioForm radioSize={size} id="male_id" value="male" status="secondary" name="radio2" label="Male" />
          <RadioForm radioSize={size} id="female_id" value="female" status="secondary" name="radio2" label="Female" />
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    );
  });
