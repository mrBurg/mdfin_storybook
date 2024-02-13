import { BUTTON_LAYOUT, BUTTON_TYPE } from 'mdfin-button-widget';

export const storytitle = 'widgets/ButtonWidget';

export const params = {
  layout: 'centered',
};

import { categories, controlType } from '@root/constants';
import { argTypes as simpleButtonArgTypes } from '@stories/atoms/SimpleButton/props';

export const args = {
  children: 'Click Me!',
  type: BUTTON_TYPE.SUBMIT,
  disabled: false,
  layout: BUTTON_LAYOUT.BUTTON,
};

export const argTypes = {
  ...simpleButtonArgTypes,
  'data-amount': {
    description: 'data-*',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  layout: {
    description: 'Layout of Button',
    options: Object.values(BUTTON_LAYOUT),
    control: { type: controlType.INLINE_RADIO },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: BUTTON_LAYOUT.BUTTON,
      },
      type: {
        summary: 'Variants',
        detail: JSON.stringify(Object.values(BUTTON_LAYOUT)),
      },
    },
  },
};
