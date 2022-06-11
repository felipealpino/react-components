import React, { Fragment, useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from '../Radio';
import { withKnobs, select } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    interface IRadioState {
      r1?: string;
      r2?: string;
    }

    const size = select('Size', [30, 40, 50], 30);

    const [radioState, setRadioState] = useState<IRadioState>();

    const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setRadioState((oldState?: IRadioState) => {
        const name = event.target.name;
        const value = event.target.value;

        if (!oldState) return { [name]: value };
        return { ...oldState, [name]: value };
      });
    }, []);

    console.log('radioState >> ', radioState);
    return (
      <Fragment>
        <BaseStyles />
        <div style={{ display: 'flex', gap: '10px' }}>
          <Radio
            radioSize={size}
            id="yes_id"
            value="yes"
            status={status}
            name="radio1"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="Yes"
          />

          <Radio
            radioSize={size}
            id="no_id"
            value="no"
            status={status}
            name="radio1"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="No"
          />
        </div>

        <br />

        <div style={{ display: 'flex', gap: '10px' }}>
          <Radio
            radioSize={size}
            id="male_id"
            value="male"
            status="secondary"
            name="radio2"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="Male"
          />
          <Radio
            radioSize={size}
            id="female_id"
            value="female"
            status="secondary"
            name="radio2"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="Female"
          />
        </div>

        <br />
        <Radio disabled id="disabled_radio_id" value="disabled_radio" label="Disabled:" name="disabled_radio" />
      </Fragment>
    );
  });
