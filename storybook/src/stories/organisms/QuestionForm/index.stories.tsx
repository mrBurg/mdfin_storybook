import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'mdfin-question-form/dist/css/QuestionForm.css';

import { storytitle, params, args, argTypes } from './props';
import cfg from '@root/config.json';

import { QuestionForm } from 'mdfin-question-form';

export default {
  title: storytitle,
  component: QuestionForm,
  parameters: Object.assign({}, cfg.globalParameters, params),
  args,
  argTypes,
} as Meta<typeof QuestionForm>;

const Template: Story<typeof QuestionForm> = (props) => (
  <QuestionForm staticData={props} />
);

export const PrimaryQuestionForm = Template.bind({});
PrimaryQuestionForm.storyName = 'QuestionForm';
