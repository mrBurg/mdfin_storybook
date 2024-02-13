import React from 'react';

import { scssConstants } from 'mdfin-theme';
// import { categories, controlType } from '@root/constants';

export const storytitle = 'organisms/Authorization';

export const params = {
  layout: 'centered',
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
  inputPlaceholder: 'Telefon',
  checkboxLabel: (
    <span>
      Сonfirm că am citit și accept prelucrarea datelor mele în scop de
      marketing și publicitate
      <br />
      <br />
      Înțeleg că prin apăsarea butonului „ÎNREGISTREAZĂ-TE” îmi dauacordul de a
      fi transferat instituțiilor financiare abilitate să-miofere un împrumut
      și/sau să fiu contactat de acestea și înțeleg că,dacă nu apăs acest buton,
      acestea din urmă nu mă pot contacta.Pentru detalii suplimentare, vă rugăm
      să citiți{' '}
      <a href="/informare.php" target="_blank">
        Politica de confidențialitate
      </a>
      .
    </span>
  ),
  buttonLabel: 'ÎNREGISTREAZĂ-TE',
};

export const argTypes = {
  /* phoneNumber: {
    description: 'Phone number input',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.phoneNumber, null, 2),
      },
      type: {
        summary: 'Phone number structure',
        detail: JSON.stringify(
          {
            id: 'string',
            placeholder: 'string',
            phoneMask: 'string',
          },
          null,
          2
        ),
      },
    },
  }, */
  /* checkBox: {
    description: 'Checkbox input',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.checkBox, null, 2),
      },
      type: {
        summary: 'Checkbox structure',
        detail: JSON.stringify(
          {
            id: 'string',
          },
          null,
          2
        ),
      },
    },
  }, */
  /* agreeText: {
    description: 'Agreement Text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.agreeText,
      },
    },
  }, */
  /* buttonText: {
    description: 'Button text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.buttonText,
      },
    },
  }, */
};
