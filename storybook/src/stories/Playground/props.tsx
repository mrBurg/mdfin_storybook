export const storytitle = 'Playground';

export const params = {
  layout: 'centered',
};

import { categories, controlType } from '@root/constants';

export const args = {
  children: 'Playground',
  className: 'playground',
};

export const argTypes = {
  children: {
    description: 'Content',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  className: {
    description: 'Style class',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
};
