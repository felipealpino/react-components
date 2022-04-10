import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Avatar } from '../Avatar';
import { BaseStyles } from '../BaseStyles';
storiesOf('Avatar', module)
  .addDecorator(withKnobs)

  .add('Open Multiple', () => {
    const image = text('Image URL', 'https://source.unsplash.com/random?avatar');

    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <BaseStyles />
        <Avatar image={image} />
        <Avatar image={image} height='40px' width='40px' />
        <Avatar image={image} height='30px' width='30px' />
        <Avatar image={image} height='20px' width='20px' />
      </div>
    );
  });
