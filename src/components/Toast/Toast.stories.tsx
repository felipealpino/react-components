import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, color, radios } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../shared/styles';
import { ExampleToUse } from './ExampleToUse';
import { BaseStyles } from '../BaseStyles';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <ThemeProvider>
        <BaseStyles />
        <ExampleToUse />
      </ThemeProvider>
    );
  });
