export const storytitle = 'organisms/ProductSelector';

import { scssConstants } from 'mdfin-theme';

import { categories, controlType } from '@root/constants';

import { argTypes as sliderWidgetArgTypes } from '@stories/widgets/SliderWidget/props';

export const params = {
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: scssConstants['border'],
      },
    ],
  },
};

export const args = {
  amountSign: 'RON',
  amountText: 'Sumă:',
  amountStep: 500,
  amountMin: 3000,
  amountMax: 10000,
  amountMarks: {
    3000: { label: '3 000 <span class="sign">RON</span>' },
    10000: { label: '10 000 <span class="sign">RON</span>' },
  },
  termSign: 'luni',
  termText: 'Perioadă:',
  termStep: 6,
  termMin: 0,
  termMax: 12,
  termMarks: {
    0: { label: '90 <span class="sign">zile</span>' },
    6: { label: '6 <span class="sign">luni</span>' },
    12: { label: '12 <span class="sign">luni</span>' },
  },
  buttonText: 'APLICĂ ACUM',
};

export const argTypes = {
  amountSign: sliderWidgetArgTypes.sign,
  amountStep: sliderWidgetArgTypes.step,
  amountMin: sliderWidgetArgTypes.min,
  amountMax: sliderWidgetArgTypes.max,
  amountMarks: sliderWidgetArgTypes.marks,
  amountText: sliderWidgetArgTypes.outputText,
  onAmountChangeHandler: sliderWidgetArgTypes.onChange,
  termSign: sliderWidgetArgTypes.sign,
  termStep: sliderWidgetArgTypes.step,
  termMin: sliderWidgetArgTypes.min,
  termMax: sliderWidgetArgTypes.max,
  termMarks: sliderWidgetArgTypes.marks,
  termText: sliderWidgetArgTypes.outputText,
  onTermChangeHandler: sliderWidgetArgTypes.onAfterChange,
  buttonText: {
    description: 'Output text',
    control: { type: controlType.TEXT },
    table: {
      category: categories.OPTIONAL,
      defaultValue: {
        summary: String(void 0),
      },
    },
  },
};
