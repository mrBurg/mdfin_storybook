import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-link-widget/dist/css/LinkWidget.css';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';
import { LinkWidget } from 'mdfin-link-widget';

export default {
  title: storytitle,
  component: LinkWidget,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<LinkWidget>;

const Template: Story<typeof LinkWidget> = (props) => <LinkWidget {...props} />;

export const PrimaryLink = Template.bind({});
PrimaryLink.storyName = 'LinkWidget';
