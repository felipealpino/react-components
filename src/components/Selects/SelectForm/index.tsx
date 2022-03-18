import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { SelectContainer } from './styles';
import { SelectDefaultProps } from '@components/Selects/interfaces/SelectDefaultProps';

export type ISelectForm = SelectDefaultProps & {
  name: string;
};

const SelectForm: React.FC<ISelectForm> = ({ name, label, options, ...props }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      }
    });
  }, [fieldName, registerField]);

  return (
    <>
      <SelectContainer className={`selectform-container ${props.className || ''}`}>
        {label && (
          <label htmlFor={fieldName}>
            {label} {props.mandatory && <span className='mandatory-star'>*</span>}
          </label>
        )}
        <select
          id={fieldName}
          className='component-select'
          ref={selectRef}
          onChange={props.onChange}
          defaultValue={defaultValue}
        >
          {props.placeholder && <option value=''>{props.placeholder}</option>}
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <span className='error'>{error}</span>}
      </SelectContainer>
    </>
  );
};

export default SelectForm;
