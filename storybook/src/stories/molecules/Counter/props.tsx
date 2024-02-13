import { categories, controlType } from '@root/constants';

export const storytitle = 'molecules/Counter';

export const params = {
  // layout: 'centered',
};

export const args = {
  title: 'NUMĂRUL DE CLIENȚI',
  subTitle: 'care au aplicat pentru un împrumut',
  countValue: 8751,
};

export const argTypes = {
  title: {
    description: 'Counter title',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  subTitle: {
    description: 'Counter sub title',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  countValue: {
    description: 'Counter value',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
};
