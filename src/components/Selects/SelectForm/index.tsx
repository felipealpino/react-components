import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { ISelectDefaultProps } from '../../../components/Selects/interfaces/ISelectDefaultProps';
import { ISelectOptions } from '../../../components/Selects/interfaces/ISelectOptions';

import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { FiChevronRight } from 'react-icons/fi';
import { SelectContainer } from '../Select/styles';
import { useField } from '@unform/core';

const SelectForm: React.FC<ISelectDefaultProps> = ({ handleOnChange, ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ISelectOptions | undefined>(props.initialOption);
  const { fieldName, registerField } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return selectedItem;
      },
      setValue: (value: ISelectOptions | undefined) => {
        setSelectedItem(value);
      },
      clearValue: () => {
        setSelectedItem(undefined);
      }
    });
  }, [fieldName, registerField, selectedItem]);

  const toggleSelect = useCallback(() => {
    !props.disabled && setOpen((oldState) => !oldState);
  }, [props.disabled]);

  const handleOptionClick = useCallback(
    (option: ISelectOptions) => {
      handleOnChange && handleOnChange(option);
      setSelectedItem(option);
      setOpen((oldState) => !oldState);
    },
    [handleOnChange]
  );

  const headerText = useMemo(() => {
    if (selectedItem) return selectedItem.name;
    if (props.placeholder) return props.placeholder;
    return 'Selecione uma Opção';
  }, [props.placeholder, selectedItem]);

  return (
    <SelectContainer
      className={`select-container ${props.className ? props.className : ''}`}
      status={props.status}
      isOpen={isOpen}
      isDisabled={props.disabled}
    >
      <label className='select-label'>
        {props.label}
        {props.mandatory && <span className='mandatory-star'>*</span>}
      </label>
      <div className='select-dropdown'>
        <div className='select-dropdown-header' onClick={toggleSelect}>
          {headerText}
          <FiChevronRight color='#222b45' />
        </div>
        {isOpen &&
          (props.options.length > 0 ? (
            <div className={`select-dropdown-body`}>
              {props.options.map((option, index) => (
                <div key={index} className='select-dropdown-item' onClick={() => handleOptionClick(option)} id={props.name}>
                  {option.name}
                </div>
              ))}
            </div>
          ) : (
            <div className={`select-dropdown-body`}>Nenhuma opção disponível .. </div>
          ))}
      </div>
      {props.error && <InputsErrorMessage error={props.error} />}
    </SelectContainer>
  );
};

export { SelectForm };
