import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-product-selector/dist/css/ProductSelector.css';
import scss from './ProductSelector.module.scss';

import { ProductSelector } from 'mdfin-product-selector';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

export default {
  title: storytitle,
  component: ProductSelector,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof ProductSelector>;

const Template: Story<typeof ProductSelector> = (props) => (
  <ProductSelector {...props} className={scss.productSelector} />
);

export const PrimaryHeader = Template.bind({});
PrimaryHeader.storyName = 'ProductSelector';
