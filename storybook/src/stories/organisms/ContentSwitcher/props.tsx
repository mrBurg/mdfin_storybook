import { categories, controlType } from '@root/constants';

import { scssConstants } from 'mdfin-theme';

export const storytitle = 'organisms/ContentSwitcher';

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
  itemsList: [
    {
      title: 'FinTech',
      description:
        'Boost your business with the advanced KYC and onboarding solutions. <p>Online banks, Wallets, P2P lending services get best suited services.</p>',
    },
    {
      title: 'Crypto',
      description:
        'Perfect verification service for any type of crypto business that takes into account government regulations.',
    },
    {
      title: 'Gaming',
      description:
        'Fast and comprehensible KYC software for both sports betting and online casino companies.',
    },
    {
      title: 'Insurance',
      description: 'Client identity verification has never been as flawless.',
    },
    {
      title: 'Telecom',
      description:
        'Stay compliant with the telecom regulators, prevent fraud with RecognID.',
    },
  ],
  buttonText: 'Get in touch',
};

export const argTypes = {
  itemsList: {
    description: 'Link type',
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
            title: 'string',
            description: 'string',
          },
          null,
          2
        ),
      },
    },
  },
  buttonText: {
    description: 'Text above form',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
};
