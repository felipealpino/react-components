import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
import { TextArea } from '../TextArea';

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const isDisabled = boolean('Disabled', false);

    const [value, setValue] = useState<string>('marrom bom boom');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <BaseStyles />
        <TextArea
          onChange={(event) => setValue(event.target.value)}
          maxLength={30}
          cols={20}
          rows={2}
          status={status}
          label="Text Area Label:"
          required
          name="text-area"
          defaultValue={value}
          resizable="none"
          disabled={isDisabled}
        ></TextArea>
        Value: {value}
      </div>
    );
  });
