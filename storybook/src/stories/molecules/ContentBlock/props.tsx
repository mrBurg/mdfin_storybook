import { categories, controlType } from '@root/constants';

export const storytitle = 'molecules/ContentBlock';

export const params = { layout: 'centered' };

export const args = {
  title: 'Un împrumut pentru a rezolva orice situație:',
  arrayContent: [
    'Înainte de salariu. Situații diverse pe care nimeni nu le poate prevedea.',
    'Pentru a cumpăra un cadou. Ce poate înlocui o emoție pozitivă?',
    'Pentru călătorie. Ce poate fi mai bun decât amintirile?',
    'Plata cursurilor. Contribuirea la dobândirea cunoștintelor este o bună investiție.',
    'Renovarea locuinței sau achiziția de electrocasnice.',
  ],
  stringContent:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum veniam sed libero deleniti vitae repellat? Molestias corporis hic ipsam. Dolor explicabo, eveniet repellat aliquid excepturi iusto tempora eos quo.',
  buttonText: 'Aplică acum',
  action: () => console.log('Do something'),
  contentIsArray: true,
};

export const argTypes = {
  title: {
    description: 'Title',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  arrayContent: {
    if: { arg: 'contentIsArray', truthy: true },
    description: 'Content',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: { summary: String(void 0) },
    },
  },
  stringContent: {
    if: { arg: 'contentIsArray', truthy: false },
    description: 'Content',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: { summary: String(void 0) },
    },
  },
  contentIsArray: {
    description: 'Switch contet type',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONS,
      defaultValue: { summary: true },
    },
  },
  buttonText: {
    description: 'Button text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: String(void 0) },
    },
  },
  action: {
    action: 'click',
    description: 'Action when button clicked',
    table: { category: categories.EVENTS },
  },
};
