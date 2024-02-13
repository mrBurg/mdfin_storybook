import _ from 'lodash';

export const storytitle = 'organisms/Header';

import { scssConstants } from 'mdfin-theme';
import { ALIGNMENT } from 'mdfin-main-menu';

import { categories, controlType } from '@root/constants';

export const params = {
  // layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: scssConstants['gray-light'],
      },
    ],
  },
};

export const args = {
  isDevice: false,
  alignment: ALIGNMENT.RIGHT,
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
};

export const argTypes = {
  items: {
    description: 'MainMenu items',
    control: { type: controlType.OBJECT },
    table: {
      category: `MainMenu ${categories.REQUIRED}`,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  isDevice: {
    description: 'MainMenu type',
    control: { type: controlType.BOOLEAN },
    table: {
      category: `MainMenu ${categories.OPTIONAL}`,
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
      category: `MainMenu ${categories.OPTIONAL}`,
      defaultValue: {
        summary: ALIGNMENT.LEFT,
      },
      type: {
        summary: 'Alignment',
        detail: _.join(_.values(ALIGNMENT), ', '),
      },
    },
  },
  Logo: {
    description: 'Logo',
    control: { type: null },
    table: {
      category: `Logo ${categories.OPTIONAL}`,
      defaultValue: {
        summary: void 0,
      },
    },
  },
};
