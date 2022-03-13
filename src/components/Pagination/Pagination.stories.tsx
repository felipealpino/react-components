import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../Pagination';

storiesOf('Pagination', module).add('Default', () => {
  const callback = useCallback(async () => {}, []);

  return <Pagination totalOfPages={10} currentPage={0} callbackGetListData={() => callback()} />;
});
