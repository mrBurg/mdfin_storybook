import { INPUT_TYPE, LAYOUT } from 'mdfin-input-widget';
import { constants } from 'mdfin-theme';

export const storytitle = 'widgets/InputWidget';

export const params = { layout: 'centered' };

import { categories, controlType } from '@root/constants';

const {
  roles: { AbstractRoles },
} = constants;

export const args = {
  placeholder: 'Placeholder',
  label: 'label',
  value: 'Value',
  disabled: false,
  id: `InputWidget-${AbstractRoles.input}`,
  invalid: false,
  layout: LAYOUT.DEFAULT,
  placeholderEmbedded: false,
  type: INPUT_TYPE.TEXT,
};

export const argTypes = {
  placeholderEmbedded: {
    description: 'Placed placeholder inside an element',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: false },
    },
  },
  label: {
    // if: { arg: 'placeholderEmbedded', truthy: false },
    description: 'label',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  placeholder: {
    // if: { arg: 'placeholderEmbedded', truthy: true },
    description: 'Placeholder',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  className: {
    description: 'ClassName of widget',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  disabled: {
    control: { type: controlType.BOOLEAN },
    description: 'Input is disabled',
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: false },
    },
  },
  inputClassName: {
    description: 'ClassName of target input element',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  invalid: {
    description: 'Is the data invalid',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: false },
      type: {
        summary: 'summary',
        detail: '"True" if the data has not been validated',
      },
    },
  },
  layout: {
    description: 'Layout view',
    options: Object.values(LAYOUT),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: LAYOUT.DEFAULT },
      type: {
        summary: 'Variants',
        detail: JSON.stringify(Object.values(LAYOUT)),
      },
    },
  },
  type: {
    description: 'Type of input',
    options: Object.values(INPUT_TYPE),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: INPUT_TYPE.TEXT },
    },
  },
  value: {
    description: 'Input value',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  id: {
    control: { type: controlType.TEXT },
    description: 'ID for API of tracking',
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: `InputWidget-${AbstractRoles.input}` },
    },
  },
  style: {
    control: { type: controlType.OBJECT },
    description: 'Inline style for element',
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  tabIndex: {
    control: { type: controlType.NUMBER },
    description: 'Index when used "Tab Button"',
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: 'Default for browser' },
    },
  },
  onChange: {
    action: 'change',
    description: 'Action when input changed',
    table: { category: categories.EVENTS },
  },
  onFocus: {
    action: 'focus',
    description: 'Action when input focused',
    table: { category: categories.EVENTS },
  },
};
