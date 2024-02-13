import _ from 'lodash';

import { COLOR_STYLE, LAOUT } from 'mdfin-loan-button';
import { BUTTON_TYPE } from 'mdfin-button-widget';

export const storytitle = 'molecules/LoanButton';

export const params = {
  layout: 'centered',
};

import { categories, controlType } from '@root/constants';
import { argTypes as ButtonWidgetArgTypes } from '@stories/widgets/ButtonWidget/props';

export const args = {
  children: 'Click Me!',
  type: BUTTON_TYPE.SUBMIT,
  disabled: false,
  userStore: {
    fetchWithAuth(callback: () => void, tokenRequired = true) {
      console.log(`Token is required "${tokenRequired}"`);

      setTimeout(() => {
        callback();
        console.log('Method "fetchWithAuth" complete');
      }, 500);
    },
  },
  loanStore: {
    getLoan(callback = _.noop, location?: string) {
      if (location) {
        console.log(`Location "${location}"`);
      }

      setTimeout(() => {
        callback();
        console.log('Method "getLoan" complete');
      }, 500);
    },
  },
  layout: LAOUT.ROUNDED,
  colorStyle: COLOR_STYLE.FULLCOLOR,
};

export const argTypes = {
  ...ButtonWidgetArgTypes,
  userStore: {
    description: 'User data controller',
    control: { type: null },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  loanStore: {
    description: 'Loan data controller',
    control: { type: null },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  location: {
    description: 'location data',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
  layout: {
    description: 'Button layout',
    options: Object.values(LAOUT),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: LAOUT.ROUNDED,
      },
      type: {
        summary: 'Variants',
        detail: JSON.stringify(Object.values(LAOUT)),
      },
    },
  },
  colorStyle: {
    description: 'Button color style',
    options: Object.values(COLOR_STYLE),
    control: { type: controlType.SELECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: COLOR_STYLE.FULLCOLOR,
      },
      type: {
        summary: 'Variants',
        detail: JSON.stringify(Object.values(COLOR_STYLE)),
      },
    },
  },
};
