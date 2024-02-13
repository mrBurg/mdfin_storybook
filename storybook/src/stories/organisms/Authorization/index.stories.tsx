import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'mdfin-authorization/dist/css/Authorization.css';
import scss from './Authorization.module.scss';

import { Authorization } from 'mdfin-authorization';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: Authorization,
  parameters: { ...cfg.globalParameters, ...params },
  args,
  argTypes,
} as ComponentMeta<typeof Authorization>;

const Template: ComponentStory<typeof Authorization> = (props) => (
  <Authorization {...props} className={scss.authorization} />
);

export const PrimaryAuthorization = Template.bind({});
PrimaryAuthorization.storyName = 'Authorization';
