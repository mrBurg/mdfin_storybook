import _ from 'lodash';

export const storytitle = 'molecules/LoanObtainingPanel';

import { categories, controlType } from '@root/constants';

export const params = {
  // layout: 'centered',
};

export const args = {
  children: 'Click Me!',
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
};

export const argTypes = {
  children: {
    description: 'Button text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
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
};
