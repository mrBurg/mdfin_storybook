import { LAYOUT } from 'mdfin-application-info';

import { categories, controlType } from '@root/constants';

export const storytitle = 'molecules/ApplicationInfo';

export const params = {
  layout: 'centered',
};

export const args = {
  title: 'Despre împrumut',
  params: [
    {
      text: 'Dată închidere împrumut',
      value: '25 June',
    },
    {
      text: 'Contract de Împrumut',
      value: '25 June',
      link: '#',
    },
    {
      text: 'Declaraţia Împrumutatului',
      value: 'RO0000-7692',
      link: '#',
    },
    {
      text: 'Grafic de rambursare Împrumut',
      value: 'Grafic de rambursare Împrumut',
      link: '#',
    },
    {
      text: 'Politica de Protecție a Datelor',
      value: 'Politica de Protecție a Datelor',
      link: '#',
    },
    {
      text: 'ISNEPCPC',
      value: 'ISNEPCPC',
      link: '#',
    },
    {
      text: 'BIROULUI DE CREDIT',
      value: 'BIROULUI DE CREDIT',
      link: '#',
    },
    {
      text: 'Declarație pe proprie răspundere',
      value: 'Declarație pe proprie răspundere',
      link: '#',
    },
    {
      text: 'Ultima plată',
      value: '0,00 LEI',
    },
  ],
  layout: LAYOUT.DEFAULT,
};

export const argTypes = {
  title: {
    description: 'Text above form',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  params: {
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
            text: 'string',
            value: 'string',
            'link?': 'string',
          },
          null,
          2
        ),
      },
    },
  },
  layout: {
    description: 'Layout view',
    options: Object.values(LAYOUT),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: LAYOUT.DEFAULT,
      },
      type: {
        summary: 'Variants',
        detail: JSON.stringify(Object.values(LAYOUT)),
      },
    },
  },
};
