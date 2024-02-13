import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-logo/dist/css/Logo.css';
import scss from './Logo.module.scss';

import { Logo, LogoType } from 'mdfin-logo';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

function decorators(Story: Story) {
  return <div className={scss.wrapper}>{<Story />}</div>;
}

export default {
  title: storytitle,
  component: Logo,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  decorators: [decorators],
} as Meta<typeof Logo>;

const Template: Story<typeof Logo> = (props) => (
  <Logo {...props} className={'textLogo'} />
);

export const PrimaryLogo = Template.bind({});
PrimaryLogo.storyName = 'ImageLogo';

export const TextLogo = Template.bind({});
TextLogo.storyName = 'TextLogo';
TextLogo.args = {
  value: 'Creditare online',
  type: LogoType.TEXT,
};
