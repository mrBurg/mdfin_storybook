import React from 'react';
import { Meta, Story } from '@storybook/react';

import scss from './WithTag.module.scss';

import { WithTag } from 'mdfin-with-tag';
import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

function decorators(Story: Story) {
  return <div className={scss.container}>{<Story />}</div>;
}

export default {
  title: storytitle,
  component: WithTag,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  decorators: [decorators],
} as Meta<typeof WithTag>;

const Template: Story<typeof WithTag> = (props) => <WithTag {...props} />;

export const PrimaryWithTag = Template.bind({});
PrimaryWithTag.storyName = 'WithTag';
