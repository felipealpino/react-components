import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { BaseStyles } from '../BaseStyles';
import { Tabs } from '../Tabs/Tabs';
import { ITab } from '../Tabs/Tab';
import { FiHome, FiLayers, FiTrendingUp } from 'react-icons/fi';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const status = select(
      'Status',
      ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'dark'],
      'primary'
    );

    const iconPosition = select('Icon Position', ['left', 'bottom', 'right', 'top'], 'left');

    const tabsToRender: ITab[] = [
      { label: 'Home', index: 0, componentToRender: <Home />, icon: FiHome, iconPosition: iconPosition },
      { label: 'Products', index: 1, componentToRender: <Products />, icon: FiLayers, iconPosition: iconPosition },
      { label: 'Graphics', index: 2, componentToRender: <Graphics />, icon: FiTrendingUp, iconPosition: iconPosition }
    ];

    return (
      <Fragment>
        <BaseStyles />
        <Tabs status={status} tabs={tabsToRender} />
      </Fragment>
    );
  });

const DirectoryContainer: React.FC = (props) => {
  return (
    <div style={{ padding: '2rem 1rem 1rem 1rem', height: 'calc(100vh - 50px)', overflowY: 'auto' }}>
      {props.children}
    </div>
  );
};

const Home: React.FC = () => {
  const [homeCount, setHomeCount] = useState<number>(0);
  return (
    <div style={{ cursor: 'pointer' }} onClick={() => setHomeCount((oldState) => oldState + 1)}>
      <DirectoryContainer>
        Home - homeCount State - {homeCount}
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>helloy</div>
        <div>LAST</div>
      </DirectoryContainer>
    </div>
  );
};
const Products: React.FC = () => {
  const [productsCount, setProductsCount] = useState<number>(0);
  return (
    <DirectoryContainer>
      <div style={{ cursor: 'pointer' }} onClick={() => setProductsCount((oldState) => oldState + 1)}>
        Products - productsCount State - {productsCount}
      </div>
    </DirectoryContainer>
  );
};
const Graphics: React.FC = () => {
  const [graphicsCount, setGraphicsCount] = useState<number>(0);
  return (
    <DirectoryContainer>
      <div style={{ cursor: 'pointer' }} onClick={() => setGraphicsCount((oldState) => oldState + 1)}>
        Graphics - graphicsCount State - {graphicsCount}
      </div>
    </DirectoryContainer>
  );
};
