import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-content-block/dist/css/ContentBlock.css';
// import scss from './ContentBlock.module.scss';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { ContentBlock } from 'mdfin-content-block';

export default {
  title: storytitle,
  component: ContentBlock,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
  /* decorators: [
    (Story: Story) => <div className={scss.contentBlock}>{<Story />}</div>,
  ], */
} as Meta<typeof ContentBlock>;

const Template: Story<typeof ContentBlock> = (props) => {
  const { arrayContent, stringContent, ...restProps } = props;

  return (
    <ContentBlock {...restProps} content={arrayContent || stringContent} />
  );
};

export const PrimaryContentBlock = Template.bind({});
PrimaryContentBlock.storyName = 'ContentBlock';
