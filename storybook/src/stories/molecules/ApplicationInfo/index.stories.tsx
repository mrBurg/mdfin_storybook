import { Meta, Story } from '@storybook/react';
import React from 'react';

import 'mdfin-application-info/dist/css/ApplicationInfo.css';
import scss from './ApplicationInfo.module.scss';

import { args, argTypes, storytitle, params } from './props';

import cfg from '@root/config.json';

import { ApplicationInfo } from 'mdfin-application-info';

export default {
  title: storytitle,
  component: ApplicationInfo,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof ApplicationInfo>;

const Template: Story<typeof ApplicationInfo> = (props) => (
  <ApplicationInfo {...props} className={scss.applicationInfo} />
);

export const PrimaryApplicationInfo = Template.bind({});
PrimaryApplicationInfo.storyName = 'ApplicationInfo';
