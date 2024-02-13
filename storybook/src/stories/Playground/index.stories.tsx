import React from 'react';
import { Meta, Story } from '@storybook/react';

import scss from './Playground.module.scss';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

function Playground(props: Record<string, unknown>) {
  const { children, ...restProps } = props;

  return <div {...restProps}>{children as string}</div>;
}

export default {
  title: storytitle,
  component: Playground,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof Playground>;

const Template: Story<typeof Playground> = (props) => (
  <div className={scss.playground}>
    <Playground {...props} />
  </div>
);

export const PrimaryPlayground = Template.bind({});
PrimaryPlayground.storyName = 'Playground';
