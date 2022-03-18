import React, { useCallback } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { Pagination } from '../Pagination';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'control'],
      'primary'
    );

    const callback = useCallback(async () => {}, []);

    return <Pagination status={status} totalOfPages={10} currentPage={0} callbackGetListData={() => callback()} />;
  });
