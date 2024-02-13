import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-cookies/dist/css/Cookies.css';
import scss from './Cookies.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { Cookies } from 'mdfin-cookies';

function decorators(Story: Story) {
  return <div className={scss.wrapper}>{<Story />}</div>;
}

export default {
  title: storytitle,
  component: Cookies,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  decorators: [decorators],
} as Meta<typeof Cookies>;

const Template: Story<typeof Cookies> = (props /* , data */) => {
  // const { loaded } = data;

  return (
    <Cookies
      {...props}
      className={scss.cookie}
      // staticData={loaded.staticData}
    />
  );
};

export const CookiesComponent = Template.bind({});
CookiesComponent.storyName = 'Cookies';
/* CookiesComponent.loaders = [
  async () => ({
    staticData: {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis incidunt praesentium eligendi voluptatum! Necessitatibus, architecto? Officiis, doloremque rem quibusdam eligendi magnam, repudiandae dolorum repellat ducimus corrupti perferendis dignissimos, quidem magni.',
      button: 'ok',
    },
  }),
]; */
