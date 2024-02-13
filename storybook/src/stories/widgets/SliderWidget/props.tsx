import { scssConstants } from 'mdfin-theme';

export const storytitle = 'widgets/SliderWidget';

export const params = {
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: scssConstants['gray-misty'],
      },
    ],
  },
};

import { categories, controlType } from '@root/constants';
import { argTypes as SimpleSliderArgTypes } from '@stories/atoms/SimpleSlider/props';

export const args = {
  marks: {
    0: { label: '90 zile' },
    6: { label: '6 luni' },
    12: { label: '12 luni' },
  },
  step: 2,
  min: 0,
  max: 12,
  markStyle: {
    fontWeight: 'bold',
  },
  dots: true,
  defaultValue: 0,
  output: true,
  outputText: 'Output text:',
  sign: 'RON',
};

export const argTypes = {
  ...SimpleSliderArgTypes,
  output: {
    description: 'Slider output',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: true,
      },
    },
  },
  outputText: {
    description: 'Output text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  sign: {
    description: 'Sign',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
};
