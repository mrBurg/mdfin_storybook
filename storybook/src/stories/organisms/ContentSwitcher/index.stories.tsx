import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-content-switcher/dist/css/ContentSwitcher.css';
import scss from './ContentSwitcher.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { ContentSwitcher } from 'mdfin-content-switcher';

export default {
  title: storytitle,
  component: ContentSwitcher,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof ContentSwitcher>;

const Template: Story<typeof ContentSwitcher> = (props) => (
  <ContentSwitcher {...props} className={scss.ContentSwitcher} />
);

export const PrimaryContentSwitcher = Template.bind({});
PrimaryContentSwitcher.storyName = 'ContentSwitcher';
