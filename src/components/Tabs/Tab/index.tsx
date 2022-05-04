import React, { useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { IPosition } from '../../../shared/interfaces';
import { ElementStatus } from '../../../shared/theme/colors';
import { colorGet } from '../../../shared/utils/colorGet';
import { TabContainer } from './styles';

export interface ITab {
  label: string;
  index: number;
  className?: string;
  componentToRender?: any;
  icon?: React.ComponentType<IconBaseProps>;
  iconposition?: IPosition;
  iconfill?: string;
  clickTabCallback?: () => void;
}

export type ITabComplete = ITab & {
  status?: ElementStatus;
  selectedTab: number;
  handleOnChangeTab: (clickedTab: number) => void;
};

const Tab: React.FC<ITabComplete> = ({ className, iconposition = 'left', icon: Icon, ...props }) => {
  const handleOnClick = useCallback(() => {
    props.handleOnChangeTab(props.index);
    props.clickTabCallback && props.clickTabCallback();
  }, []);

  return (
    <TabContainer
      iconposition={iconposition}
      className={`tab-option ${className ? className : ''}`}
      onClick={handleOnClick}
      {...props}
    >
      {Icon && (iconposition === 'left' || iconposition === 'top') && (
        <Icon color={colorGet('basic', 800)} fill={props.iconfill || 'transparent'} />
      )}

      <span>{props.label}</span>

      {Icon && (iconposition === 'right' || iconposition === 'bottom') && (
        <Icon color={colorGet('basic', 800)} fill={props.iconfill || 'transparent'} />
      )}
    </TabContainer>
  );
};

export { Tab };
