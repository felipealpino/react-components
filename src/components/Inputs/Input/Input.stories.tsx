import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../Input';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    interface IInputText {
      firstName?: string;
      lastName?: string;
    }

    const [inputText, setInputText] = useState<IInputText>({});

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      const inputName = event.target.name;
      const inputValue = event.target.value;

      setInputText((oldState) => {
        return { ...oldState, [inputName]: inputValue };
      });
    }, []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Input
          name='firstName'
          onChange={(event) => handleInputChange(event)}
          status={status}
          placeholder='Digite o nome'
          autoComplete='off'
          icon={{ name: 'funnel', fill: '222B45' }}
        />
        <Input
          name='lastName'
          autoComplete='off'
          onChange={(event) => handleInputChange(event)}
          status={status}
          placeholder='Digite o sobrenome'
          icon={{ name: 'funnel', fill: '222B45' }}
        />
        <label>Nome: {inputText.firstName || ''} </label>
        <label>Sobrenome: {inputText.lastName || ''} </label>

        <br />
        <Input status={status} disabled placeholder='Input disabled' />
        <Input error='Algum error aconteceu aqui' status={status} defaultValue={'default value setted'} />
      </div>
    );
  });
