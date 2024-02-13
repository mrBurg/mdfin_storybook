import { BUTTON_TYPE } from 'mdfin-simple-button';

export const storytitle = 'atoms/SimpleButton';

export const params = {
  layout: 'centered',
};

import { categories, controlType } from '@root/constants';

export const args = {
  children: 'Click Me!',
  type: BUTTON_TYPE.SUBMIT,
  disabled: false,
};

export const argTypes = {
  children: {
    description: 'Button label',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  id: {
    control: { type: controlType.TEXT },
    description: 'Button ID',
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  className: {
    description: 'Button className',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  style: {
    control: { type: controlType.OBJECT },
    description: 'Inline style for element',
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
      type: {
        summary: 'React.CSSProperties object',
        detail: JSON.stringify({ fontSize: '1em' }, null, 2),
      },
    },
  },
  type: {
    description: 'Button type',
    options: Object.values(BUTTON_TYPE),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: BUTTON_TYPE.SUBMIT,
      },
      type: {
        summary: 'Variants',
        detail: JSON.stringify(Object.values(BUTTON_TYPE)),
      },
    },
  },
  disabled: {
    control: { type: controlType.BOOLEAN },
    description: 'Button is disabled',
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: false,
      },
    },
  },
  onClick: {
    action: 'click',
    description: 'Action when button clicked',
    table: {
      category: categories.EVENTS,
    },
  },
};
