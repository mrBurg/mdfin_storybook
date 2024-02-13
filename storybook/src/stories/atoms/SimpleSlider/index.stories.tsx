import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-simple-slider/dist/css/SimpleSlider.css';
import scss from './SimpleSlider.module.scss';

import { SimpleSlider } from 'mdfin-simple-slider';
import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: SimpleSlider,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SimpleSlider>;

const Template: Story<typeof SimpleSlider> = (props) => (
  <SimpleSlider {...props} className={scss.simpleSlider} />
);

export const PrimarySimpleSlider = Template.bind({});
PrimarySimpleSlider.storyName = 'SimpleSlider';
