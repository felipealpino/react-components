import React, { useCallback } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isDisabled = boolean('Disabled ? ', true);

    return (
      // <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button disabled={isDisabled} status={status} onClick={() => alert('Voce clicou no botao')}>
        Clique Aqui
      </Button>
      // </div>
    );
  });
