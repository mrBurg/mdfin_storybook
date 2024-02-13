import { categories, controlType, actionType } from '@root/constants';

export const storytitle = 'atoms/SimpleInput';

export const params = {
  layout: 'centered',
};

export const args = {
  placeholder: 'Enter text',
  error: false,
  required: false,
};

export const argTypes = {
  placeholder: {
    description: 'Placeholder',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  errorMessage: {
    description: 'Error Message',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: 'This field cannot be empty',
      },
    },
  },
  value: {
    description: 'Input value',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  id: {
    description: 'Input id',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  className: {
    description: 'Input style class',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  error: {
    description: 'Has error',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: false,
      },
    },
  },
  required: {
    description: 'Is required',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: false,
      },
    },
  },
  callBack: {
    action: actionType.CHANGE,
    description: 'When input was changed',
    table: {
      category: categories.EVENTS,
    },
  },
  onBlur: {
    action: actionType.BLUR,
    description: 'When input lost focus',
    table: {
      category: categories.EVENTS,
    },
  },
};
