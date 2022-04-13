import React from 'react';

import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '../Checkbox';
import { BaseStyles } from '../../BaseStyles';
import { FiTrash2 } from 'react-icons/fi';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <BaseStyles />
        <Checkbox
          defaultChecked={true}
          onChange={(event) => console.log(event.target.checked)}
          status={status}
          semiRounded
          name={''}
          id={''}
        />

        <Checkbox
          defaultChecked={false}
          onChange={(event) => console.log(event.target.checked)}
          status={status}
          semiRounded
          icon={FiTrash2}
          iconColor='#222B45'
          name={''}
          id={''}
          label={'ANANABO'}
        />

        <Checkbox
          defaultChecked={false}
          onChange={(event) => console.log(event.target.checked)}
          status={status}
          semiRounded
          iconColor='#222B45'
          name={''}
          id={''}
          error='This field is required'
          label={'Hi, I am a required checkbox'}
        />

        <Checkbox
          defaultChecked={false}
          onChange={(event) => console.log(event.target.checked)}
          status={status}
          semiRounded
          name={''}
          id={''}
          disabled={isDisabled}
          label={'Hi, You can disable me'}
        />
      </div>
    );
  });
