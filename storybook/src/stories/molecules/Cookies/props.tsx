// import { categories, controlType } from '@root/constants';

export const storytitle = 'molecules/Cookies';

import { categories, controlType } from '@root/constants';

export const params = {
  // layout: 'centered',
};

export const args = {
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis incidunt praesentium eligendi voluptatum! Necessitatibus, architecto? Officiis, doloremque rem quibusdam eligendi magnam, repudiandae dolorum repellat ducimus corrupti perferendis dignissimos, quidem magni.',
  buttonText: 'ok',
  buttonAction: () => {
    console.log('Alert was ignored');
  },
  cookiesPrivacy: true,
};

export const argTypes = {
  staticData: {
    description: 'Static data',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
      type: {
        summary: 'Variants',
        detail: JSON.stringify({ text: 'Main text', button: 'Button text' }),
      },
    },
  },
  cookiesPrivacy: {
    description: 'cookiesPrivacy',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: true,
      },
    },
  },
  buttonAction: {
    action: 'click',
    description: 'Action when button clicked',
    table: {
      category: categories.EVENTS,
    },
  },
};
