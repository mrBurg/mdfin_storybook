import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-loan-button/dist/css/LoanButton.css';
import scss from './LoanButton.module.scss';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { LoanButton } from 'mdfin-loan-button';

export default {
  title: storytitle,
  component: LoanButton,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof LoanButton>;

const Template: Story<typeof LoanButton> = (props) => (
  <LoanButton {...props} className={scss.loanButton} />
);

export const LoanButtonComponent = Template.bind({});
LoanButtonComponent.storyName = 'LoanButton';
