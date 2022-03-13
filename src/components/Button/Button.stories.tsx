import React, { useCallback } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { withKnobs, select } from '@storybook/addon-knobs';
import { boolean } from 'yup';

storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    return <Button status={status} onClick={() => alert('Voce clicou no botao')}>Clique Aqui</Button>;
  });
