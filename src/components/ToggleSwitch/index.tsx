import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';

import Icon from 'react-eva-icons';

import { ElementStatus } from '@shared/theme/colors';

import { StyledToggleSwitchContainer } from './styles';

export interface IToggleSwitchProps {
  customStyles?: React.CSSProperties;
  iconNameDisabled?: string;
  iconNameEnabled?: string;
  textIfOn?: string;
  textIfOff?: string;
  rounded?: boolean;
  animatedIcon?: boolean;
  status?: ElementStatus;
  outline?: boolean;
  disabled?: boolean;
  isChecked?: boolean;
  handleOnChange?: (stateCheckButton: boolean) => void;
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = ({
  customStyles,
  iconNameDisabled = '',
  iconNameEnabled = '',
  rounded = true,
  animatedIcon = false,
  status = 'success',
  outline = true,
  disabled = false,
  handleOnChange,
  isChecked = false,
  ...rest
}) => {

  const [statusCheck, setStatusCheck] = useState<boolean>(isChecked);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = useCallback(() => {
    if (handleOnChange)
      handleOnChange(statusCheck);
  }, [handleOnChange, statusCheck]);

  const props = useMemo(() => {

    if (animatedIcon) {
      iconNameDisabled = '';
      iconNameEnabled = '';
    }

    return {
      customStyles,
      iconNameDisabled,
      iconNameEnabled,
      rounded,
      status,
      outline,
      disabled,
      ...rest
    };
  }, [
    customStyles,
    iconNameDisabled,
    iconNameEnabled,
    rounded,
    status,
    outline,
    disabled,
    animatedIcon,
    rest
  ]);

  useEffect(() => {
    setStatusCheck(isChecked);
  }, [isChecked]);

  return (
    <StyledToggleSwitchContainer
      {...props}
      style={customStyles}
      statusCheck={statusCheck}
    >
      <input type='checkbox' ref={inputRef} onChange={handleChangeInput} />
      <span className='slider' onClick={() => !disabled && setStatusCheck(!statusCheck)}>
        <div className='center-ball'>
          {animatedIcon && (
            <div className='animated-icon-div'>
              <div className='animated-icon'></div>
            </div>
          )}
          {statusCheck && <label>{iconNameEnabled && <Icon name={iconNameEnabled} fill='' />} </label>}
          {!statusCheck && <label>{iconNameDisabled && <Icon name={iconNameDisabled} fill='' />}</label>}
        </div>
      </span>
    </StyledToggleSwitchContainer>
  );
};

export { ToggleSwitch };
