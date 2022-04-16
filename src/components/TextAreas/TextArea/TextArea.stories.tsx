import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
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
        <TextArea
          onChange={(event) => console.log(event.target.value)}
          maxLength={30}
          cols={20}
          rows={2}
          status={status}
          label='Text Area Label:'
          mandatory='on'
          name='text-area'
          defaultValue='marrom bom boom'
          resizable='none'
        ></TextArea>
      </div>
    );
  });
