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

    const size = select('Size', [30, 40, 50], 30);

    const [radioState, setRadioState] = useState<{ r1: string; r2: string }>();

    const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setRadioState((oldState) => {
        const name = event.target.name;
        const id = event.target.id;
        return { ...oldState, [name]: id };
      });
    }, []);

    console.log(radioState);
    return (
      <Fragment>
        <BaseStyles />
        <div style={{ display: 'flex', gap: '10px' }}>
          <Radio radioSize={size} id="yes" status={status} name="r1" handleOnCheck={(event) => handleChangeInput(event)} label="Yes" />
          <Radio radioSize={size} id="no" status={status} name="r1" handleOnCheck={(event) => handleChangeInput(event)} label="No" />
        </div>
        <br />
        <div style={{ display: 'flex', gap: '10px' }}>
          <Radio radioSize={size} id="male" status="secondary" name="r2" handleOnCheck={(event) => handleChangeInput(event)} label="Male" />
          <Radio radioSize={size} id="female" status="secondary" name="r2" handleOnCheck={(event) => handleChangeInput(event)} label="Female" />
        </div>

        <br />
        <Radio disabled id={'disabled_radio'} label="Disabled:" name={'disabled_radio'} />
      </Fragment>
    );
  });
