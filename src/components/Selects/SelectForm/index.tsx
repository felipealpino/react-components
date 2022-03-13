import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { StyledSelect } from "./styles";

export interface ISelectFormProps {
  name: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  customStyles?: React.CSSProperties;
  disabled?: boolean;
  role?: string;
  options: ISelectOptions[];
  placeholder?: string;
  mandatory?: boolean;
}

interface ISelectOptions {
  value: string;
  name: string;
}

const SelectForm: React.FC<ISelectFormProps> = ({ name, label, onChange, customStyles, options, placeholder, mandatory, ...rest }) => {
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
        ref.current.value = "";
      }
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledSelect className="container-input" style={customStyles}>
        {label && (
          <label htmlFor={fieldName}>
            {label} {mandatory && <span className="mandatory-star">*</span>}
          </label>
        )}
        <select id={fieldName} className="component-select" ref={selectRef} onChange={onChange} defaultValue={defaultValue}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <span className="error">{error}</span>}
      </StyledSelect>
    </>
  );
};

export default SelectForm;
