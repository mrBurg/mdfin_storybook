import { LogoType } from 'mdfin-logo';

import { categories, controlType } from '@root/constants';

export const storytitle = 'atoms/Logo';

export const params = {
  // layout: 'centered',
};

const imagesPath = [
  '/Logo/logo-imprumut-acum.webp',
  '/Logo/logo-imprumut.png',
  '/Logo/logo-rapide.svg',
];

export const args = {
  value: imagesPath[2], //'/Logo/logo-rapide.svg', //'Creditare online',
  clickable: true,
  href: 'https://imprumut-online.com/',
  type: LogoType.IMAGE,
};

export const argTypes = {
  value: {
    description: 'path for image / text value',
    control: { type: controlType.SELECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
    options: Object.values(imagesPath),
  },
  clickable: {
    description: 'Clickable',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: true,
      },
    },
  },
  href: {
    description: 'link, when clicked',
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
    control: { type: controlType.TEXT },
  },
  type: {
    description: 'path for image / text value',
    control: { type: controlType.SELECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
    options: Object.values(LogoType),
  },
};
