import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-header/dist/css/Header.css';
import scss from './Header.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { Header } from 'mdfin-header';
import { MainMenu } from 'mdfin-main-menu';
import { Logo } from 'mdfin-logo';

export default {
  title: storytitle,
  component: Header,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof Header>;

const Template: Story<typeof Header> = (props) => (
  <Header
    Logo={<Logo value={'/Logo/logo-imprumut-acum.webp'} className={scss.img} />}
    MainMenu={
      <MainMenu
        items={props.items}
        isDevice={props.isDevice}
        alignment={props.alignment}
      />
    }
    className={scss.header}
  />
);

export const PrimaryHeader = Template.bind({});
PrimaryHeader.storyName = 'Header';
