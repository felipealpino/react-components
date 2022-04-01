import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SelectContainer } from './styles';
import Icon from 'react-eva-icons';

import { SelectDefaultProps } from '../../../components/Selects/interfaces/SelectDefaultProps';
import { ISelectOptions } from '../../../components/Selects/interfaces/ISelectOptions';

import { colorGet } from '../../../shared/utils/colorGet';

const Select: React.FC<SelectDefaultProps> = (props) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<ISelectOptions[]>([]);
  const [selectedItem, setSelectedItem] = useState<ISelectOptions>();

  useEffect(() => {
    setOptions(props.options);
    const found = props.options.find((option) => option.selected === true);
    setSelectedItem(found)
  }, [props.options]);

  const toggleSelect = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const handleOptionClick = useCallback(
    (option: ISelectOptions) => {
      props.handleOnChange(option);
      setSelectedItem(option);
      setOpen(!isOpen);
    },
    [isOpen]
  );

  const headerText = useMemo(() => {
    if (selectedItem) return selectedItem.name;
    if (props.placeholder) return props.placeholder;
    return 'Selecione uma Opção';
  }, [selectedItem, props.placeholder]);

  return (
    <SelectContainer
      className={`select-container ${props.className ? props.className : ''}`}
      status={props.status}
      isOpen={isOpen}
    >
      <label className='select-label'>
        {props.label}
        {props.mandatory && <span className='mandatory-star'>*</span>}
      </label>
      <div className='dropdown'>
        <div className='dropdown-header' onClick={toggleSelect}>
          {headerText}
          <label className='icon-header'>
            <Icon name='arrow-ios-forward-outline' fill='#000000' size='large' />
          </label>
        </div>
        {isOpen && (
          <div className={`dropdown-body`}>
            {options.map((option, index) => (
              <div key={index} className='dropdown-item' onClick={() => handleOptionClick(option)} id={props.name}>
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {props.error && (
        <label className='error'>
          <Icon name='alert-circle-outline' fill={colorGet('danger', 500)} />
          {props.error}
        </label>
      )}
    </SelectContainer>
  );
};

export { Select };
