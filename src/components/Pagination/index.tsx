import React, { useCallback } from 'react';
import Icon from 'react-eva-icons';
import { ElementStatus } from '@shared/theme/colors';

import { ContainerPagination } from './styles';

export interface IPagination {
  totalOfPages: number | string;
  currentPage: number | string;
  option?: any;
  fixed?: boolean;
  status?: ElementStatus;
  rounded?: boolean;
  className?: string;
  callbackGetListData: (search: string, page: number, option?: any) => Promise<void>;
}

declare type IAction = 'forward' | 'back';

const Pagination: React.FC<IPagination> = ({ rounded = true, ...props }) => {
  const changePage = useCallback(
    (action: IAction): void => {
      if (action === 'forward') {
        const newPage = Number(props.currentPage) + 1;
        if (newPage >= props.totalOfPages) return;
        props.callbackGetListData('', newPage, props.option);
      }
      if (action === 'back') {
        const newPage = Number(props.currentPage) - 1;
        if (newPage < 0) return;
        props.callbackGetListData('', newPage, props.option);
      }
    },
    [props.totalOfPages, props.currentPage, props.callbackGetListData, props.option]
  );

  return (
    <ContainerPagination
      {...props}
      rounded={rounded}
      status={props.status}
      className={`pagination-container ${props.className}`}
    >
      <div className='pagination-content'>
        <label className='pagination-content-icon' onClick={() => changePage('back')}>
          <Icon name='arrow-ios-back' fill='white' />
        </label>
        <span className='pagination-content-text'>
          Página {Number(props.currentPage) + 1} de {props.totalOfPages > 0 ? props.totalOfPages : 1}
        </span>
        <label className='pagination-content-icon' onClick={() => changePage('forward')}>
          <Icon name='arrow-ios-forward' fill='white' />
        </label>
      </div>
    </ContainerPagination>
  );
};

export { Pagination };
