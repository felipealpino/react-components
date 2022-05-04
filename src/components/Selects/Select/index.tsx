import React, { useCallback, useMemo, useState } from 'react';

import { SelectContainer } from './styles';

import { ISelectDefaultProps } from '../../../components/Selects/interfaces/ISelectDefaultProps';
import { ISelectOptions } from '../../../components/Selects/interfaces/ISelectOptions';

import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { FiChevronRight } from 'react-icons/fi';
import InputLabel from '../../../shared/components/InputLabel';

const Select: React.FC<ISelectDefaultProps> = ({ handleOnChange, ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ISelectOptions | undefined>(props.initialOption);

  const toggleSelect = useCallback(() => {
    !props.disabled && setOpen((oldState) => !oldState);
  }, [props.disabled]);

  const handleOptionClick = useCallback(
    (option: ISelectOptions) => {
      handleOnChange && handleOnChange(option);
      setSelectedItem(option);
      setOpen((oldState) => !oldState);
    },
    [handleOnChange],
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
      optionsFillSpace={props.optionsFillSpace}
    >
      {props.label && <InputLabel label={props.label} status={props.status} mandatory={props.mandatory} />}

      <div className="select-dropdown">
        <div className="select-dropdown-header" onClick={toggleSelect}>
          {headerText}
          <FiChevronRight color="#222b45" />
        </div>
        {isOpen &&
          (props.options.length > 0 ? (
            <div className={'select-dropdown-body'}>
              {props.options.map((option, index) => (
                <div key={index} className="select-dropdown-item" onClick={() => handleOptionClick(option)} id={props.name}>
                  {option.name}
                </div>
              ))}
            </div>
          ) : (
            <div className={'select-dropdown-body'}>Nenhuma opção disponível .. </div>
          ))}
      </div>
      {props.error && <InputsErrorMessage error={props.error} />}
    </SelectContainer>
  );
};

export { Select };
