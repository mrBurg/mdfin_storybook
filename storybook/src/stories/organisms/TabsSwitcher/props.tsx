export const storytitle = 'organisms/TabsSwitcher';

import { scssConstants } from 'mdfin-theme';

import { categories, controlType } from '@root/constants';

export const params = {
  layout: 'centered',
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
  tabs: [
    {
      id: 'business',
      name: 'For business',
      title: 'For business:',
      text: [
        'Real-time automated KYC service',
        'Correspondence to regulators requirements',
        'Trouble-free integration',
        'Flexible customization',
      ],
      image: '/images/tabsBlock/business.png',
    },
    {
      id: 'users',
      name: 'For end users',
      title: 'For end users:',
      text: [
        'User-friendly service',
        'Form free',
        'Secure: no data storage',
        'Trusted global partners',
      ],
      image: '/images/tabsBlock/users.png',
    },
  ],
  buttonText: 'Get started',
};

export const argTypes = {
  tabs: {
    description: 'Array of objects',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
      type: {
        summary: 'Single object structure',
        detail: JSON.stringify(
          {
            id: 'string',
            name: 'string',
            title: 'string',
            text: 'string[]',
            image: 'string [url | data:image/png;base64]',
          },
          null,
          2
        ),
      },
    },
  },
  buttonText: {
    description: 'Button text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
};
