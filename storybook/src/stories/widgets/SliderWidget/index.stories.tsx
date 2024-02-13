import React from 'react';
import { Meta, Story } from '@storybook/react';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { SliderWidget } from 'mdfin-slider-widget';

export default {
  title: storytitle,
  component: SliderWidget,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SliderWidget>;

const Template: Story<typeof SliderWidget> = (props) => (
  <SliderWidget {...props} />
);

export const PrimarySliderWidget = Template.bind({});
PrimarySliderWidget.storyName = 'SliderWidget';
