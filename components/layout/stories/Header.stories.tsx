import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../Header';

export default {
  title: 'Example/HeaderNew',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const Primary = () => <Header />;

Primary.parameters = {
  nextRouter: {
    path: "/",
    asPath: "/",
    query: {},
  },
};