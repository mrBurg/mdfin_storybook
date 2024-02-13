import _ from 'lodash';

export const storytitle = 'molecules/MainMenu';

export const params = {
  // layout: 'centered',
};

import { ALIGNMENT } from 'mdfin-main-menu';
import { categories, controlType } from '@root/constants';

export const args = {
  items: [
    {
      href: '#/about-loan',
      title: 'About Loan',
      index: 1,
    },
    {
      href: '#/repayment',
      title: 'Repayment',
      index: 0,
    },
    {
      href: '#/faq',
      title: 'FAQ',
    },
    {
      href: '#/contacts',
      title: 'Contacts',
    },
    {
      href: '#/sign-in',
      title: 'Sign In',
    },
  ],
  alignment: ALIGNMENT.LEFT,
  isDevice: false,
};

export const argTypes = {
  items: {
    description: 'MainMenu items',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  className: {
    description: 'MainMenu style class',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  isDevice: {
    description: 'MainMenu type',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  alignment: {
    description: 'MainMenu aligment',
    options: _.values(ALIGNMENT),
    control: { type: controlType.INLINE_RADIO },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: ALIGNMENT.LEFT,
      },
      type: {
        summary: 'Alignment',
        detail: _.join(_.values(ALIGNMENT), ', '),
      },
    },
  },
};
