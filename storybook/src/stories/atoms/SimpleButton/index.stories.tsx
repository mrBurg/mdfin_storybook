import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-simple-button/dist/css/SimpleButton.css';

import { SimpleButton } from 'mdfin-simple-button';
import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: SimpleButton,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SimpleButton>;

const Template: Story<typeof SimpleButton> = (props) => (
  <SimpleButton {...props} />
);

export const PrimarySimpleButton = Template.bind({});
PrimarySimpleButton.storyName = 'SimpleButton';
