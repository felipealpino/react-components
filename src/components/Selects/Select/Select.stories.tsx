import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Select } from '../Select';
import { ISelectOptions } from '../interfaces/ISelectOptions';
import { BaseStyles } from '../../BaseStyles';
storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const selectBodyFillSpace = boolean('Select Options Fill Space ', false);

    const names = [
      { name: 'Thawan Cavalcante', value: 'thawan' },
      { name: 'Gabriel Campos', value: 'gabriel' },
      { name: 'Igor Araujo', value: 'igor' },
      { name: 'Felipe Gontijo', value: 'felipe' },
    ];

    const handleOnSelectOption = useCallback((option: ISelectOptions, objectKey: string) => {
      console.log(`Change key ${objectKey} to ${option}`);
    }, []);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <BaseStyles />
        <Select
          optionsFillSpace={selectBodyFillSpace}
          handleOnChange={(option) => handleOnSelectOption(option, 'name')}
          placeholder="Select your name"
          status={status}
          label="Names:"
          name="name"
          mandatory="on"
          options={names}
        />

        <Select
          optionsFillSpace={selectBodyFillSpace}
          handleOnChange={() => console.log('changed')}
          placeholder="Select with Error"
          status={status}
          label="This is an error select: "
          name="error"
          mandatory="on"
          options={names}
          error="This field is required."
        />

        <Select
          optionsFillSpace={selectBodyFillSpace}
          handleOnChange={() => console.log('changed')}
          placeholder="Select without options"
          status={status}
          label="This Select has no Options: "
          name="no_options"
          options={[]}
        />

        <Select
          optionsFillSpace={selectBodyFillSpace}
          handleOnChange={(option) => console.log(option, 'name')}
          status={status}
          label="This Select has an Initial Option: "
          name="initial_option"
          options={names}
          initialOption={{ name: 'Felipe Gontijo', value: 'felipe' }}
        />

        <Select
          optionsFillSpace={selectBodyFillSpace}
          handleOnChange={() => console.log('changed')}
          placeholder="Disabled Select"
          status={status}
          label="This is an Disabled Select: "
          name="disabled_select"
          disabled
          options={names}
        />
      </div>
    );
  });
