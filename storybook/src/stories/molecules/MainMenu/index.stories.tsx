import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-main-menu/dist/css/MainMenu.css';
import scss from './MainMenu.module.scss';

import { storytitle, args, argTypes, params } from './props';
import cfg from '@root/config.json';

import { MainMenu } from 'mdfin-main-menu';

/* function decorators(Story: Story) {
  return <div className={scss.wrapper}>{<Story />}</div>;
} */

export default {
  title: storytitle,
  component: MainMenu,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  // decorators: [decorators],
} as Meta<typeof MainMenu>;

const Template: Story<typeof MainMenu> = (props) => (
  <MainMenu {...props} className={scss.mainMenu} />
);

export const MainMenuComponent = Template.bind({});
MainMenuComponent.storyName = 'MainMenu';
