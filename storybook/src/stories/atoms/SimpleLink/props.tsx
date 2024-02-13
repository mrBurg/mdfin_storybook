import { SimpleLinkTypes, TARGET } from 'mdfin-simple-link';

import { categories, controlType, actionType } from '@root/constants';

export const storytitle = 'atoms/SimpleLink';

export const params = {
  layout: 'centered',
};

export const args = {
  type: SimpleLinkTypes.INLINE_BLOCK,
  children: 'Link',
  target: TARGET.SELF,
};

export const argTypes = {
  type: {
    description: 'Link type',
    options: Object.values(SimpleLinkTypes),
    control: { type: controlType.INLINE_RADIO },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: SimpleLinkTypes.INLINE,
      },
      type: {
        summary: 'Variants',
        detail: Object.values(SimpleLinkTypes).join(', '),
      },
    },
  },
  target: {
    description: 'Link type',
    options: Object.values(TARGET),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: TARGET.SELF,
      },
      type: {
        summary: 'Variants',
        detail: Object.values(TARGET).join(', '),
      },
    },
  },
  id: {
    description: 'Link id',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  href: {
    description: 'Link href',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  children: {
    description: 'Inner element',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  className: {
    description: 'Link style class',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: 'simpleLink',
      },
    },
  },
  onClick: {
    action: actionType.CLICK,
    description: 'Action when button clicked',
    table: {
      category: categories.EVENTS,
    },
  },
};
