import { scssConstants } from 'mdfin-theme';

export const storytitle = 'widgets/CheckboxWidget';

export const params = {
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: scssConstants['gray-misty'],
      },
    ],
  },
};

// import { categories, controlType } from '@root/constants';
import { argTypes as simpleCheckboxArgTypes } from '@stories/atoms/SimpleCheckbox/props';

export const args = {
  name: 'Name',
  label: 'Label',
  invalid: false,
  checked: false,
  onChange: (data: boolean, element: HTMLElement) => {
    data;
    element;
  },
};

export const argTypes = {
  ...simpleCheckboxArgTypes,
  /* name: {
    description: 'Input name',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  }, */
  /* label: {
    description: 'Input label',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  }, */
  /* checked: {
    description: 'Input check',
    control: null,
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: false,
      },
    },
  }, */
  /* invalid: {
    description: 'Input invalid',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: false,
      },
    },
  }, */
  /* onChange: {
    action: 'change',
    description: 'Action when checkbox change',
    table: {
      category: categories.EVENTS,
    },
  }, */
};
