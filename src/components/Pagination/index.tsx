import React, { useCallback, useState } from 'react';
import { ElementStatus } from '../../shared/theme/colors';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { PaginationContainer } from './styles';

export interface IPagination {
  totalOfPages: number | string;
  currentPage: number | string;
  option?: any;
  status?: ElementStatus;
  rounded?: boolean;
  className?: string;
  callbackGetListData: (search: string, page: number, option?: any) => Promise<void>;
}

const Pagination: React.FC<IPagination> = ({ rounded = true, callbackGetListData, ...props }) => {
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const goBackPage = useCallback(() => {
    const newPage = Number(props.currentPage) - 1;

    if (newPage + 1 === 1) setIsFirstPage(true);
    if (newPage < 0) return;

    setIsLastPage(false);
    callbackGetListData('', newPage, props.option);
  }, [callbackGetListData, props.currentPage, props.option]);

  const goForwardPage = useCallback(() => {
    const newPage = Number(props.currentPage) + 1;

    if (newPage + 1 === props.totalOfPages) setIsLastPage(true);
    if (newPage >= props.totalOfPages) return;

    setIsFirstPage(false);
    callbackGetListData('', newPage, props.option);
  }, [callbackGetListData, props.currentPage, props.option, props.totalOfPages]);

  return (
    <PaginationContainer
      {...props}
      callbackGetListData={callbackGetListData}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      rounded={rounded}
      className={`pagination-container ${props.className || ''}`}
    >
      <div className="pagination-content">
        <label className="pagination-content-icon back" onClick={goBackPage}>
          <FiChevronLeft color="#FFFFFF" />
        </label>
        <span className="pagination-content-text">
          Página {Number(props.currentPage) + 1} de {props.totalOfPages > 0 ? props.totalOfPages : 1}
        </span>
        <label className="pagination-content-icon forward" onClick={goForwardPage}>
          <FiChevronRight color="#FFFFFF" />
        </label>
      </div>
    </PaginationContainer>
  );
};

export { Pagination };
