import React, { useCallback, useState } from 'react';
import Icon from 'react-eva-icons';
import { ElementStatus } from '@shared/theme/colors';

import { PaginationContainer } from './styles';

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

const Pagination: React.FC<IPagination> = ({ rounded = true, ...props }) => {
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const goBackPage = useCallback(() => {
    const newPage = Number(props.currentPage) - 1;

    if (newPage + 1 === 1) setIsFirstPage(true);
    if (newPage < 0) return;

    setIsLastPage(false);
    props.callbackGetListData('', newPage, props.option);
  }, [props.currentPage, props.option]);

  const goForwardPage = useCallback(() => {
    const newPage = Number(props.currentPage) + 1;

    if (newPage + 1 === props.totalOfPages) setIsLastPage(true);
    if (newPage >= props.totalOfPages) return;

    setIsFirstPage(false);
    props.callbackGetListData('', newPage, props.option);
  }, [props.currentPage, props.option, props.totalOfPages]);

  return (
    <PaginationContainer
      {...props}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      rounded={rounded}
      className={`pagination-container ${props.className || ''}`}
    >
      <div className='pagination-content'>
        <label className='pagination-content-icon back' onClick={goBackPage}>
          <Icon name='arrow-ios-back' fill='white' />
        </label>
        <span className='pagination-content-text'>
          Página {Number(props.currentPage) + 1} de {props.totalOfPages > 0 ? props.totalOfPages : 1}
        </span>
        <label className='pagination-content-icon forward' onClick={goForwardPage}>
          <Icon name='arrow-ios-forward' fill='white' />
        </label>
      </div>
    </PaginationContainer>
  );
};

export { Pagination };
