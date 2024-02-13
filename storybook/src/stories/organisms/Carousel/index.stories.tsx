import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-carousel/dist/css/Carousel.css';
import scss from './Carousel.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { Carousel } from 'mdfin-carousel';
import classNames from 'classnames';

export default {
  title: storytitle,
  component: Carousel,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof Carousel>;

const Template: Story<typeof Carousel> = (props) => {
  const { className, ...restProps } = props;

  return (
    <Carousel {...restProps} className={classNames(scss.carousel, className)} />
  );
};

export const PrimaryCarousel = Template.bind({});
PrimaryCarousel.storyName = 'Carousel';
