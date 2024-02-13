import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-simple-input/dist/css/SimpleInput.css';

import { SimpleInput } from 'mdfin-simple-input';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle + '/SimpleInput',
  component: SimpleInput,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof SimpleInput>;

const Template: Story<typeof SimpleInput> = (props) => (
  <SimpleInput {...props} />
);

export const PrimarySimpleInput = Template.bind({});
PrimarySimpleInput.storyName = 'SimpleInput';
