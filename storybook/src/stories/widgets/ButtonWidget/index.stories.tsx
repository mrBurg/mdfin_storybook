import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-button-widget/dist/css/ButtonWidget.css';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { ButtonWidget, BUTTON_LAYOUT } from 'mdfin-button-widget';

export default {
  title: storytitle,
  component: ButtonWidget,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<ButtonWidget>;

const Template: Story<typeof ButtonWidget> = (props) => (
  <ButtonWidget {...props} />
);

export const ButtonDefault = Template.bind({});
ButtonDefault.storyName = 'ButtonDefault';

export const ButtonInline = Template.bind({});
ButtonInline.args = {
  ...args,
  layout: BUTTON_LAYOUT.INLINE,
};
ButtonInline.storyName = 'ButtonInline';
