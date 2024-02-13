import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-loan-obtaining-panel/dist/css/LoanObtainingPanel.css';
import scss from './LoanObtainingPanel.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { LoanObtainingPanel } from 'mdfin-loan-obtaining-panel';

function decorators(Story: Story) {
  return <div className={scss.wrapper}>{<Story />}</div>;
}

export default {
  title: storytitle,
  component: LoanObtainingPanel,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  decorators: [decorators],
} as Meta<typeof LoanObtainingPanel>;

const Template: Story<typeof LoanObtainingPanel> = (props) => (
  <LoanObtainingPanel {...props} className={scss.loanObtainingPanel} />
);

export const LoanObtainingPanelComponent = Template.bind({});
LoanObtainingPanelComponent.storyName = 'LoanObtainingPanel';
