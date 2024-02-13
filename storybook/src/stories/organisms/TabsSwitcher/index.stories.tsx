import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-tabs-switcher/dist/css/TabsSwitcher.css';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { TabsSwitcher } from 'mdfin-tabs-switcher';

export default {
  title: storytitle,
  component: TabsSwitcher,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof TabsSwitcher>;

const Template: Story<typeof TabsSwitcher> = (props) => (
  <TabsSwitcher {...props} />
);

export const PrimaryTabsSwitcher = Template.bind({});
PrimaryTabsSwitcher.storyName = 'TabsSwitcher';
