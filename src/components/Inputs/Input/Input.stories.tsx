import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../Input';
import { withKnobs, select, text, color, radios } from '@storybook/addon-knobs';
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <Input
            label='Name:'
            name='first_name'
            onChange={(event) => handleInputChange(event)}
            status={status}
            placeholder='Digite o nome'
            autoComplete='off'
            key={`${iconColor}-1`}
            icon={{ name: 'funnel', fill: iconColor }}
          />
          <label>Name: {inputText.first_name || ''} </label>
        </div>

        <div>
          <Input
            label='Last Name:'
            name='last_name'
            autoComplete='off'
            onChange={(event) => handleInputChange(event)}
            status={status}
            placeholder='Digite o sobrenome'
            icon={{ name: 'funnel', fill: iconColor }}
          />
          <label>Last Name: {inputText.last_name || ''} </label>
        </div>

        <Input label='This input is disabled' status={status} disabled placeholder='Input disabled' />

        <Input label='This input has an error' error='Input error message ... ' status={status} />

        <Input label='This input has Brazilian CPF mask' status={status} mask='###.###.###-##' />
      </div>
    );
  });