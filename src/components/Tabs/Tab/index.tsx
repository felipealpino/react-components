import React from 'react';
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
}

export type ITabComplete = ITab & {
  status?: ElementStatus;
  selectedTab: number;
  handleOnClickTab: (clickedTab: number) => void;
};

const Tab: React.FC<ITabComplete> = ({ className, iconposition = 'left', icon: Icon, ...props }) => {
  return (
    <TabContainer
      iconposition={iconposition}
      className={`tab-option ${className ? className : ''}`}
      {...props}
      onClick={() => props.handleOnClickTab(props.index)}
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
