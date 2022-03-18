import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../Input';
import { withKnobs, select, text, color } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );
    const iconColor = color('Icon fill', '#8F9BB3');

    interface IInputText {
      first_name?: string;
      last_name?: string;
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
          label='Nome:'
          name='first_name'
          onChange={(event) => handleInputChange(event)}
          status={status}
          placeholder='Digite o nome'
          autoComplete='off'
          key={`${iconColor}-1`}
          icon={{ name: 'funnel', fill: iconColor }}
        />
        <label>Nome: {inputText.first_name || ''} </label>

        <Input
          label='Sobrenome:'
          name='last_name'
          autoComplete='off'
          onChange={(event) => handleInputChange(event)}
          status={status}
          placeholder='Digite o sobrenome'
          icon={{ name: 'funnel', fill: iconColor }}
        />
        <label>Sobrenome: {inputText.last_name || ''} </label>

        <br />
        <Input status={status} disabled placeholder='Input disabled' />
        <Input error='Algum error aconteceu aqui' status={status} defaultValue={'default value setted'} />
      </div>
    );
  });
