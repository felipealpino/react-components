import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Avatar } from '../Avatar';
import { BaseStyles } from '../BaseStyles';
storiesOf('Avatar', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const image = text('Image URL', 'https://source.unsplash.com/random?avatar');

    const avatarSize = select('Size', ['20px', '30px', '40px', '50px', '60px'], '50px');

    return (
      <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <BaseStyles />
        <Avatar image={image} height={avatarSize} width={avatarSize} />
      </div>
    );
  });
