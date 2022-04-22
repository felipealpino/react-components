import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Form } from '@unform/web';
import { Button } from '../../Button';
import { SelectForm } from '../../Selects/SelectForm';
import { BaseStyles } from '../../BaseStyles';

storiesOf('SelectForm', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary'
    );

    const selectBodyFillSpace = boolean('Select Options Fill Space ', false);

    const names = [
      { name: 'Thawan Cavalcante', value: 'thawan' },
      { name: 'Gabriel Campos', value: 'gabriel' },
      { name: 'Igor Araujo', value: 'igor' },
      { name: 'Felipe Gontijo', value: 'felipe' }
    ];

    const handleSubmit = (formData) => {
      console.log(`formData`, formData);
      console.log(`select1 > `, formData.select1);
      console.log(`select2 > `, formData.select2);
    };

    return (
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BaseStyles />
        <SelectForm optionsFillSpace={selectBodyFillSpace} options={names} name={'select1'} status={status} />
        <SelectForm optionsFillSpace={selectBodyFillSpace} options={names} name={'select2'} status={status} />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  });
