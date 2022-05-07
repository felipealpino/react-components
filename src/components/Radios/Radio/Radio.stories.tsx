import React, { Fragment, useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from '../Radio';
import { withKnobs, select, radios } from '@storybook/addon-knobs';
import { BaseStyles } from '../../BaseStyles';
storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary',
    );

    const options = { Yes: 'on', No: undefined };
    const isMandatory = radios('Mandatory', options, undefined);
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
        <div>
          <Radio
            radioSize={size}
            id="yes"
            status={status}
            name="r1"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="Yes"
            mandatory={isMandatory}
          />
          <Radio
            radioSize={size}
            id="no"
            status={status}
            name="r1"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="No"
            mandatory={isMandatory}
          />
        </div>
        <br />
        <div>
          <Radio
            radioSize={size}
            id="male"
            status="secondary"
            name="r2"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="Male"
            mandatory={isMandatory}
          />
          <Radio
            radioSize={size}
            id="female"
            status="secondary"
            name="r2"
            handleOnCheck={(event) => handleChangeInput(event)}
            label="Female"
            mandatory={isMandatory}
          />
        </div>
      
        <br />
        <Radio disabled id={'disabled_radio'} label="Disabled:" name={'disabled_radio'} />
      </Fragment>
    );
  });
