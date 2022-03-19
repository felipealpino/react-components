import React from 'react';
import {  Story } from '@storybook/react';


import { Card } from './index'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Cards/Card',
  component: Card,
  args: {
    title: 'Titulo',
    img: 'https://source.unsplash.com/user/willianjusten',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet cum totam assumenda aperiam cupiditate incidunt rem voluptatum facere, ipsum perspiciatis, porro nemo quidem, repudiandae repellendus numquam sed distinctio iusto.',
  }
};

export const Primary: Story = (args) =>(
  <div style={{ width: '18.75rem' }}>
    <Card direction='column' {...args}/>
  </div>
)

export const Rouded: Story = (args) =>
  <div style={{ width: '18.75rem' }}>
    <Card direction='column' rounded {...args}/>
  </div>

export const WithButton: Story = (args) =>
<div style={{ width: '18.75rem' }}>
  <Card direction='column' button {...args}/>
</div>

export const Row: Story = (args) =>
<div style={{ width: '40rem' }}>
  <Card direction='row' {...args}/>
</div>
