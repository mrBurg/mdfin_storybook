import { SimpleLinkTypes, TARGET } from 'mdfin-simple-link';

export const storytitle = 'widgets/LinkWidget';

export const params = {
  layout: 'centered',
};

import { categories, controlType } from '@root/constants';
import { argTypes as simpleLinkArgTypes } from '@stories/atoms/SimpleLink/props';

export const args = {
  type: SimpleLinkTypes.INLINE_BLOCK,
  children: 'Link',
  target: TARGET.SELF,
  track: true,
};

export const argTypes = {
  ...simpleLinkArgTypes,
  track: {
    control: { type: controlType.BOOLEAN },
    description: 'Track actions',
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: true,
      },
    },
  },
};
