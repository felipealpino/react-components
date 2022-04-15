import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, color } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
import { TextArea } from '../TextArea';

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <BaseStyles />
        <TextArea label='Oi text area:' mandatory={true} name={'text-area'}>
          marrom bom boom
        </TextArea>
      </div>
    );
  });
