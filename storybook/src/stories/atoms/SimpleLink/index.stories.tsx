import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-simple-link/dist/css/SimpleLink.css';

import { SimpleLink, SimpleLinkTypes } from 'mdfin-simple-link';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: SimpleLink,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SimpleLink>;

const Template: Story<typeof SimpleLink> = (props) => (
  <SimpleLink {...props}>{props.children}</SimpleLink>
);

export const PrimaryLink = Template.bind({});
PrimaryLink.storyName = 'DefaultLink';
PrimaryLink.args = {
  type: SimpleLinkTypes.INLINE,
};

export const PrimaryButtonLink = Template.bind({});
PrimaryButtonLink.storyName = 'ButtonLink';
