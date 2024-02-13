import React from 'react';
import { Meta, Story } from '@storybook/react';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { SimpleCheckbox } from 'mdfin-simple-checkbox';
import 'mdfin-simple-checkbox/dist/css/SimpleCheckbox.css';

export default {
  title: storytitle,
  component: SimpleCheckbox,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SimpleCheckbox>;

const Template: Story<typeof SimpleCheckbox> = (props) => (
  <SimpleCheckbox {...props} />
);

export const PrimarySimpleCheckbox = Template.bind({});
PrimarySimpleCheckbox.storyName = 'SimpleCheckbox';
