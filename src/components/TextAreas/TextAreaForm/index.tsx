import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { StyledTextArea } from "./styles";

export interface ITextAreaFormProps {
  name: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  maxLength?: number;
  type?: string;
  customStyles?: React.CSSProperties;
  disabled?: boolean;
  placeholder?: string;
  value?: string | number;
  visible?: boolean;
  role?: string;
  autoComplete?: string;
  mandatory?: boolean;
}

const TextAreaForm: React.FC<ITextAreaFormProps> = ({ name, label, onChange, type = "text", customStyles, onBlur, autoComplete = "off", mandatory, ...rest }) => {
  const textAreaRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef,
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
      <StyledTextArea className="container-textarea" style={customStyles}>
        {label && (
          <label htmlFor={fieldName}>
            {label} {mandatory && <span className="mandatory-star">*</span>}
          </label>
        )}
        <textarea
          id={fieldName}
          className="component-input"
          autoComplete={autoComplete}
          ref={textAreaRef}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        >
          {error && <span className="error">{error}</span>}
        </textarea>
      </StyledTextArea>
    </>
  );
};

export default TextAreaForm;
