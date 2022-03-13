import React, { useRef, useEffect, useCallback } from "react";
import { useField } from "@unform/core";
import { StyledInput } from "./styles";
import { masker } from "@shared/utils/masker";
import Icon from "react-eva-icons";

export interface IInputFormProps {
  name: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
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
  mask?: string;
  iconName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  autoFocus?: boolean;
  tabIndex?: number;
  className?: string;
}

const InputForm: React.FC<IInputFormProps> = ({
  autoFocus = false,
  inputRef,
  iconName,
  mask,
  name,
  label,
  onChange,
  type = "text",
  customStyles,
  onBlur,
  autoComplete = "off",
  mandatory,
  tabIndex,
  className = "",
  ...rest
}) => {
  let inputReference = useRef<HTMLInputElement>(null);
  if (inputRef) inputReference = inputRef;

  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputReference,
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
  }, [fieldName, inputReference, registerField]);

  const handleChange = useCallback(
    (ev) => {
      if (mask && ev.nativeEvent.inputType !== "deleteContentBackward") {
        ev.target.value = masker(ev.target.value.replace(/[^a-zA-Z0-9]/g, ""), mask);
      }

      if (onChange) {
        onChange(ev);
      }
    },
    [mask, onChange]
  );

  return (
    <>
      <StyledInput className={`container-input  ${className}`} style={customStyles}>
        {label && (
          <label htmlFor={fieldName}>
            {label} {mandatory && <span className="mandatory-star">*</span>}
          </label>
        )}
        <div className="input-wrapper">
          <input
            id={fieldName}
            autoFocus={autoFocus}
            tabIndex={tabIndex}
            className="component-input"
            autoComplete={autoComplete}
            ref={inputReference}
            defaultValue={defaultValue}
            type={type}
            onChange={handleChange}
            onBlur={onBlur}
            maxLength={rest.maxLength}
            {...rest}
          />

          {iconName && (
            <div className="container-icon-input">
              <Icon name={iconName} fill="var(--black)" />
            </div>
          )}
        </div>

        {error && <span className="error">{error}</span>}
      </StyledInput>
    </>
  );
};

export default InputForm;
