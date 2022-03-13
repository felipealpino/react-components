import React, { useCallback } from 'react';
import Icon from 'react-eva-icons';
import { ElementStatus } from '@shared/theme/colors';

import { StyledPagination } from './styles';

interface IPagination {
  totalOfPages: number | string;
  currentPage: number | string;
  option?: any;
  fixed?: boolean;
  status?: ElementStatus;
  callbackGetListData: (search: string, page: number, option?: any) => Promise<void>;
}

declare type IAction = 'forward' | 'back';

const Pagination: React.FC<IPagination> = ({
  totalOfPages,
  currentPage,
  callbackGetListData,
  option = undefined,
  fixed = false,
  status = 'primary'
}) => {
  const changePage = useCallback(
    (action: IAction): void => {
      if (action === 'forward') {
        const newPage = Number(currentPage) + 1;
        if (newPage >= totalOfPages) return;
        callbackGetListData('', newPage, option);
      }
      if (action === 'back') {
        const newPage = Number(currentPage) - 1;
        if (newPage < 0) return;
        callbackGetListData('', newPage, option);
      }
    },
    [totalOfPages, currentPage, callbackGetListData, option]
  );

  return (
    <StyledPagination status={status} fixed={fixed} className='pagination-container'>
      <div className='pagination-content'>
        <label className='pagination-content-icon' onClick={() => changePage('back')}>
          <Icon name='arrow-ios-back' fill='white' />
        </label>
        <span className='pagination-content-text'>
          Página {Number(currentPage) + 1} de {totalOfPages > 0 ? totalOfPages : 1}
        </span>
        <label className='pagination-content-icon' onClick={() => changePage('forward')}>
          <Icon name='arrow-ios-forward' fill='white' />
        </label>
      </div>
    </StyledPagination>
  );
};

export { Pagination };
