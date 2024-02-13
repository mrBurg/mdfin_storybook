import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-social-links/dist/css/SocialLinks.css';

import { SocialLinks } from 'mdfin-social-links';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: SocialLinks,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SocialLinks>;

const Template: Story<typeof SocialLinks> = (props) => (
  <SocialLinks {...props} />
);

export const PrimarySocialLinks = Template.bind({});
PrimarySocialLinks.storyName = 'SocialLinks';
