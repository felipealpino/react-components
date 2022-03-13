import React, { useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { InputForm } from '../InputForm';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Button } from '../../Button';
import * as Yup from 'yup';

export const groupSchema = Yup.object().shape({
  firstName: Yup.string().required({ name: 'firstName', message: 'O campo é obrigatório' }),
  lastName: Yup.string().required({ name: 'lastName', message: 'O campo é obrigatório' })
});
// .matches(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12]\d|3[01])$/, { message: { name: 'date', message: 'Formato inválido' } })

export interface IInputErrorsFormat {
  name: string;
  message: string;
}

interface IInputFormText {
  firstName?: string;
  lastName?: string;
}

export const beforeSubmitForm = async (inputData: any, schema: any) => {
  let auxErrors = [] as IInputErrorsFormat[];
  try {
    await schema.validate(inputData, { abortEarly: false });
    return auxErrors;
  } catch (err: any) {
    console.log(err.errors);
    err.errors.map((er) => auxErrors.push(er));
    return auxErrors;
  }
};

export const errorMessageBuilder = (inputName: string, errors: IInputErrorsFormat[]): string | undefined => {
  const found = errors.find((error) => error.name === inputName);
  if (found) return found.message;
  return undefined;
};

storiesOf('InputForm', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const [errors, setErros] = useState<IInputErrorsFormat[]>([]);
    const [inputText, setInputFormText] = useState<IInputFormText>({});
    const formRef = useRef<FormHandles>(null);

    const handleInputFormChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      const inputName = event.target.name;
      const inputValue = event.target.value;

      setInputFormText((oldState) => {
        return { ...oldState, [inputName]: inputValue };
      });
    }, []);

    const handleSubmit = (data) => {
      canSaveGroup(data);
      setInputFormText(data);
    };

    const canSaveGroup = useCallback(async (data) => {
      const formErros = await beforeSubmitForm(data, groupSchema);
      setErros(formErros);
    }, []);

    return (
      <Form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <InputForm
          name='firstName'
          onChange={(event) => handleInputFormChange(event)}
          status={status}
          placeholder='Digite o nome'
          autoComplete='off'
          icon={{ name: 'funnel', fill: '222B45' }}
          error={errorMessageBuilder('firstName', errors)}
        />
        <InputForm
          name='lastName'
          autoComplete='off'
          onChange={(event) => handleInputFormChange(event)}
          status={status}
          placeholder='Digite o sobrenome'
          icon={{ name: 'funnel', fill: '222B45' }}
          error={errorMessageBuilder('lastName', errors)}
        />

        <Button>Submit</Button>
        <div>
          <div>Nome: {inputText.firstName || ''} </div>
          <div>Sobrenome: {inputText.lastName || ''} </div>
        </div>
      </Form>
    );
  });
