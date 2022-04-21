import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { BaseStyles } from '../BaseStyles';
import { Tabs } from '../Tabs/Tabs';
import { ITab, Tab } from '../Tabs/Tab';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger'],
      'primary'
    );

    const tabsToRender: ITab[] = [
      { label: 'Home', index: 0, componentToRender: <Home /> },
      { label: 'Products', index: 1, componentToRender: <Products /> },
      { label: 'Graphics', index: 2, componentToRender: <Graphics /> }
    ];

    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%', flexDirection: 'column' }}>
        <BaseStyles />
        <Tabs status={status} tabs={tabsToRender} />
      </div>
    );
  });

const Home: React.FC = () => {
  const [homeCount, setHomeCount] = useState<number>(0);
  return (
    <div style={{ cursor: 'pointer' }} onClick={() => setHomeCount((oldState) => oldState + 1)}>
      Home - homeCount State - {homeCount}
    </div>
  );
};
const Products: React.FC = () => {
  const [productsCount, setProductsCount] = useState<number>(0);
  return (
    <div style={{ cursor: 'pointer' }} onClick={() => setProductsCount((oldState) => oldState + 1)}>
      Products - productsCount State - {productsCount}
    </div>
  );
};
const Graphics: React.FC = () => {
  const [graphicsCount, setGraphicsCount] = useState<number>(0);
  return (
    <div style={{ cursor: 'pointer' }} onClick={() => setGraphicsCount((oldState) => oldState + 1)}>
      Graphics - graphicsCount State - {graphicsCount}
    </div>
  );
};
