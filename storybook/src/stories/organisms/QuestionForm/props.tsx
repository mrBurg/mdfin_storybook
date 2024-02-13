import { categories, controlType } from '@root/constants';

export const storytitle = 'organisms/QuestionForm';

export const params = {
  // layout: 'centered',
};

export const args = {
  title: 'Got a question?<br/>We are here to help',
  subtitle:
    'Feel free to send us your request on how RecognID could solve your business goals, and we’ll come back with a prompt reply. Complete the form below:',
  firstName: {
    placeholder: 'First name*',
    id: 'firstName',
  },
  workEmail: {
    placeholder: 'Work Email*',
    id: 'workEmail',
  },
  lastName: {
    placeholder: 'Last name*',
    id: 'lastName',
  },
  companyName: {
    placeholder: 'Company name*',
    id: 'companyName',
  },
  request: {
    placeholder: 'Type your request',
    id: 'request',
    size: 'big',
  },
  policyCheckboxText:
    'By sending this request I agree with the <a href="/docs/RecognID_Privacy_Policy_20220505.pdf" target="_blank">privacy policy</a> and ready to receive relevant information via email',
  validFormMessage: 'Your request has been sent',
  validFormDescription: 'Our team will contact you shortly',
  validButtonText: 'Ok',
  invalidWorkEmailMessage: 'Please enter a valid email',
  invalidPolicyCheckboxMessage: 'You must agree Privacy Policy to proceed',
  invalidFormMessage: 'Something went wrong',
  invalidFormDescription: 'Please try again later',
  invalidButtonText: 'Try again',
};

export const argTypes = {
  title: {
    description: 'Title of form',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.title,
      },
    },
  },
  subtitle: {
    description: 'subtitle of form',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.subtitle,
      },
    },
  },
  firstName: {
    description: 'First name input',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.firstName, null, 2),
      },
      type: {
        summary: 'First name structure',
        detail: JSON.stringify(
          {
            placeholder: 'string',
            id: 'string',
          },
          null,
          2
        ),
      },
    },
  },
  workEmail: {
    description: 'Work email input',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.workEmail, null, 2),
      },
      type: {
        summary: 'Work email structure',
        detail: JSON.stringify(
          {
            placeholder: 'string',
            id: 'string',
          },
          null,
          2
        ),
      },
    },
  },
  lastName: {
    description: 'Last name input',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.lastName, null, 2),
      },
      type: {
        summary: 'Last name structure',
        detail: JSON.stringify(
          {
            placeholder: 'string',
            id: 'string',
          },
          null,
          2
        ),
      },
    },
  },
  companyName: {
    description: 'Company name input',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.companyName, null, 2),
      },
      type: {
        summary: 'Company name structure',
        detail: JSON.stringify(
          {
            placeholder: 'string',
            id: 'string',
          },
          null,
          2
        ),
      },
    },
  },
  request: {
    description: 'Request text area',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: JSON.stringify(args.request, null, 2),
      },
      type: {
        summary: 'Company name structure',
        detail: JSON.stringify(
          {
            placeholder: 'string',
            id: 'string',
            size: 'string',
          },
          null,
          2
        ),
      },
    },
  },
  policyCheckboxText: {
    description: 'Policy checkbox text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.policyCheckboxText,
      },
    },
  },
  validFormMessage: {
    description: 'Valid form message',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.validFormMessage,
      },
    },
  },
  validFormDescription: {
    description: 'Valid form description',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.validFormDescription,
      },
    },
  },
  validButtonText: {
    description: 'Valid button text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.validButtonText,
      },
    },
  },
  invalidWorkEmailMessage: {
    description: 'Invalid work email message',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.invalidWorkEmailMessage,
      },
    },
  },
  invalidPolicyCheckboxMessage: {
    description: 'Invalid policy checkbox message',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.invalidPolicyCheckboxMessage,
      },
    },
  },
  invalidFormMessage: {
    description: 'Invalid form message',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.invalidFormMessage,
      },
    },
  },
  invalidFormDescription: {
    description: 'Invalid form description',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.invalidFormDescription,
      },
    },
  },
  invalidButtonText: {
    description: 'Invalid button text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: args.invalidButtonText,
      },
    },
  },
};
