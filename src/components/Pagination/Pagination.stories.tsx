import React, { Fragment, useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../Pagination';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { BaseStyles } from '../BaseStyles';
storiesOf('Pagination', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const isRounded = boolean('Rounded ? ', false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const changePage = useCallback(async (search?: string, page?: number) => {
      setCurrentPage(page);
    }, []);

    return (
      <Fragment>
        <BaseStyles />
        <Pagination
          rounded={isRounded}
          status={status}
          totalOfPages={10}
          currentPage={currentPage}
          callbackGetListData={changePage}
        />
      </Fragment>
    );
  });
