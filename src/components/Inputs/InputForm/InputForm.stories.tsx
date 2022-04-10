import React, { useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { InputForm } from '../InputForm';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Button } from '../../Button';
import * as Yup from 'yup';
import { BaseStyles } from '../../BaseStyles';
export const groupSchema = Yup.object().shape({
  first_name: Yup.string().required({ name: 'first_name', message: 'O campo é obrigatório' }),
  last_name: Yup.string().required({ name: 'last_name', message: 'O campo é obrigatório' })
});
// .matches(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12]\d|3[01])$/, { message: { name: 'date', message: 'Formato inválido' } })

interface IInputFormText {
  first_name?: string;
  last_name?: string;
}

export interface IInputErrorsFormat {
  name: string;
  message: string;
}

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

    const handleSubmit = (data) => {
      canSaveGroup(data);
      setInputFormText(data);
    };

    const canSaveGroup = useCallback(async (data) => {
      const formErros = await beforeSubmitForm(data, groupSchema);
      setErros(formErros);
    }, []);

    const beforeSubmitForm = async (inputData: any, schema: any) => {
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

    return (
      <Form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BaseStyles />
        <InputForm
          label='Nome'
          name='first_name'
          status={status}
          placeholder='Digite o Nome'
          autoComplete='off'
          error={errorMessageBuilder('first_name', errors)}
        />
        <InputForm
          label='Sobrenome'
          name='last_name'
          autoComplete='off'
          status={status}
          placeholder='Digite o Sobrenome'
          error={errorMessageBuilder('last_name', errors)}
        />

        <InputForm icon={{ name: 'funnel', fill: '222b45' }} name='search' status={status} placeholder='Buscar' />

        <Button onClick={() => formRef.current.submitForm()}>Submit</Button>
        <div>
          <div>Nome: {inputText.first_name || ''} </div>
          <div>Sobrenome: {inputText.last_name || ''} </div>
        </div>
      </Form>
    );
  });
