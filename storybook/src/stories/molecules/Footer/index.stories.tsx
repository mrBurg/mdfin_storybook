import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-footer/dist/css/Footer.css';
import scss from './Footer.module.scss';

import { storytitle, params, args, argTypes } from './props';

import { Footer } from 'mdfin-footer';

// import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: Footer,
  parameters: { /* ...cfg.globalParameters, */ ...params },
  args,
  argTypes,
} as Meta<typeof Footer>;

const Template: Story<typeof Footer> = (props) => (
  <div className={scss.wrapper}>
    <Footer {...props} />
  </div>
);

export const PrimaryFooter = Template.bind({});
PrimaryFooter.storyName = 'Footer';
