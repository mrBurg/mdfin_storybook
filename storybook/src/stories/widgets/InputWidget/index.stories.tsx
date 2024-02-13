import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-input-widget/dist/css/InputWidget.css';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { InputWidget, LAYOUT } from 'mdfin-input-widget';

export default {
  title: storytitle,
  component: InputWidget,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof InputWidget>;

const Template: Story<typeof InputWidget> = (props) => (
  <InputWidget {...props} />
);

export const InputDefault = Template.bind({});
InputDefault.args = {
  ...args,
  layout: LAYOUT.DEFAULT,
};
InputDefault.storyName = 'InputDefault';

export const InputSoft = Template.bind({});
InputSoft.args = {
  ...args,
  layout: LAYOUT.SOFT,
};
InputSoft.storyName = 'InputSoft';
