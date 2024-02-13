import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-counter/dist/css/Counter.css';
import scss from './Counter.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { Counter } from 'mdfin-counter';

function decorators(Story: Story) {
  return <div className={scss.wrapper}>{<Story />}</div>;
}

export default {
  title: storytitle,
  component: Counter,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  decorators: [decorators],
} as Meta<typeof Counter>;

const Template: Story<typeof Counter> = (props) => <Counter {...props} />;

export const PrimaryCounter = Template.bind({});
PrimaryCounter.storyName = 'Counter';
