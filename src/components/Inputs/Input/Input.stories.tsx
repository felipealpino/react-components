import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../Input';
import { withKnobs, select, color } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import { BaseStyles } from '../../BaseStyles';
import { FiFilter } from 'react-icons/fi';
storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const iconcolor = color('Icon fill', '#8F9BB3');

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
        <BaseStyles />
        <div>
          <Input
            label="Name:"
            name="first_name"
            onChange={(event) => handleInputChange(event)}
            status={status}
            placeholder="Digite o nome"
            autoComplete="off"
            key={`${iconcolor}-1`}
            icon={FiFilter}
            iconcolor={iconcolor}
            iconfill={iconcolor}
          />
          <label>Name: {inputText.first_name || ''} </label>
        </div>

        <div>
          <Input
            label="Last Name:"
            name="last_name"
            autoComplete="off"
            onChange={(event) => handleInputChange(event)}
            status={status}
            placeholder="Digite o sobrenome"
            icon={FiFilter}
            iconcolor={iconcolor}
            required
          />
          <label>Last Name: {inputText.last_name || ''} </label>
        </div>

        <Input label="This input is disabled" status={status} disabled placeholder="Input disabled" name={''} />

        <Input label="This input has an error" error="Input error message ... " status={status} name={''} />

        <Input label="This input has Brazilian CPF mask" status={status} mask="###.###.###-##" name={''} />
      </div>
    );
  });
