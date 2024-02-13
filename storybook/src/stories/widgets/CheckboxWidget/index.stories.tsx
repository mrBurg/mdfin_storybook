import React from 'react';
import { Meta, Story } from '@storybook/react';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { CheckboxWidget } from 'mdfin-checkbox-widget';
import 'mdfin-checkbox-widget/dist/css/CheckboxWidget.css';

export default {
  title: storytitle,
  component: CheckboxWidget,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof CheckboxWidget>;

const Template: Story<typeof CheckboxWidget> = (props) => (
  <CheckboxWidget {...props} />
);

export const PrimaryCheckboxWidget = Template.bind({});
PrimaryCheckboxWidget.storyName = 'CheckboxWidget';
