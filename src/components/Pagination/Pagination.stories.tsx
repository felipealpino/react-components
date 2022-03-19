import React, { useCallback, useState } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { Pagination } from '../Pagination';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { number } from 'yup';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isRounded = boolean('Rounded ? ', true);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const changePage = useCallback(async (search?: string, page?: number) => {
      setCurrentPage(page);
    }, []);

    return (
      <Pagination
        rounded={isRounded}
        status={status}
        totalOfPages={10}
        currentPage={currentPage}
        callbackGetListData={changePage}
      />
    );
  });
