export const storytitle = 'atoms/SimpleSlider';

export const params = {
  layout: 'centered',
};

import { categories, controlType } from '@root/constants';

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
};

export const argTypes = {
  marks: {
    description: 'Marks items',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
      type: {
        summary: 'Example',
        detail: JSON.stringify(
          {
            'key [ string | number ]': {
              label: '[ string | number ]',
              'style?': 'React.CSSProperties',
            },
          },
          null,
          2
        ),
      },
    },
  },
  markStyle: {
    description: 'Marks style',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
      type: {
        summary: 'Type of object',
        detail: 'React.CSSProperties',
      },
    },
  },
  step: {
    description: 'Slider step',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: 1,
      },
    },
  },
  min: {
    description: 'Slider min',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: 0,
      },
    },
  },
  max: {
    description: 'Slider max',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: 100,
      },
    },
  },
  dots: {
    description: 'Slider max',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: false,
      },
    },
  },
  defaultValue: {
    description: 'Default value',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: 0,
      },
    },
  },
  onChange: {
    action: 'onChange',
    description: 'Action when slider changes',
    table: {
      category: categories.EVENTS,
    },
  },
  onAfterChange: {
    action: 'onAfterChange',
    description: 'Action when the change is completed',
    table: {
      category: categories.EVENTS,
    },
  },
};
